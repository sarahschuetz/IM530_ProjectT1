<template>
    <div>
        <section>
            <div class="content">
                <h1>Welcome home, Sarah S.!</h1>
                <p>You are a student at FH Hagenberg.</p>
            </div>
        </section>
        <section class="section-pink">
            <div class="content">
                <img src="~static/img/cats-XX.png" alt="mystery cat" />
                <h2>Oh no! Look what happend!?</h2>
                <p>One of the cats peed on the carpet in the livingroom.</p>
                <p>Who could it have been?</p>
            </div>
        </section>
        <section v-if="!gameEnded">
            <div class="content">
                <h2 v-if="$store.state.currentRoom != null" class="center-text">{{ location }}</h2>
                <House/>
            </div>
        </section>
        <section v-if="!gameEnded" class="small-margin">
            <div class="content">
                <h2 class="center-text">Who do you think is guilty?</h2>
                <div class="input center-block">
                    <form @submit.prevent="accuseCat">
                        <input v-model.trim="accusedCatName" @input="clearErrorMsg"/>
                        <button type="submit" class="btn filled-pink icon">
                            <i class="material-icons">&#xE163;</i>
                        </button>
                        <div class="error-msg" v-if="showErrorMsg">You don't have a cat with this name..</div>
                    </form>
                </div>
            </div>
        </section>
        <section v-else>
            <div class="content game-over">
                <div v-if="answer">
                    <h2>You're totally right!</h2>
                    <p>No treats for {{ accusedCat.name }} today..</p>
                    <img :src="'/img/' + accusedCat.img" :alt="accusedCat.name"/>
                </div>
                <div v-else>
                    <h2>{{ accusedCat.name }} is innocent!</h2>
                    <p>Now the true actor will remain a mystery..</p>
                    <img :src="'/img/' + accusedCat.img" :alt="accusedCat.name"/>
                </div>
            </div>
            <button class="btn filled-pink center-block play-again-btn" @click="playAgain">play again!</button>
        </section>
    </div>
</template>

// --------------------------------------------------

<script>

    import Axios from 'axios';
    import House from '~components/House.vue';

    export default {

        layout: 'chat',
        beforeMount: function() {
            this.initializeState();
        },
        data: function() {
            return {
                accusedCatName: '',
                gameEnded: false,
                answer: null,
                accusedCat: null,
                showErrorMsg: false
            }
        },
        components: {
            House
        },
        computed: {
            location: function() {
                
                let location = 'You\'re ';

                if(this.$store.state.currentRoom.name == 'balcony') {
                    location += 'on';
                } else {
                    location += 'in';
                }

                location += ' the ' + this.$store.state.currentRoom.name + '.';

                return location;
            }
        },
        methods: {
            initializeState: function() {
                const numberOfCats = Math.round(Math.random() * 3) + 3;

                const cats = Axios.get('/api/cats/random/' + numberOfCats);
                const rooms = Axios.get('/api/rooms');
                const owner = Axios.get('/api/person/random');
                const crime = Axios.get('/api/crime/random');
                const activities = Axios.get('/api/activities');

                // wait for all, because state must be posted and
                // stored when everything is set
                Promise.all([cats, rooms, owner, crime, activities]).then((result) => {

                    this.$store.dispatch('setCats', result[0].data);
                    this.$store.dispatch('setRooms', result[1].data);
                    this.$store.dispatch('setOwner', result[2].data);
                    this.$store.dispatch('setCrime', result[3].data);

                    const activityArray = result[4].data;

                    for(let cat of result[0].data) {
                        this.catChangesRoom(cat, false)();

                        if(this.$store.state.guiltyCat._id == cat._id) { // cat is guilty
                            cat.crime_room =  this.$store.state.crime.location;
                        } else { // cat is not guilty
                            const randomRoomIndex = Math.floor(Math.random() * this.$store.state.rooms.length);
                            cat.crime_room =  { // don't reference actual room to prevent circular references
                                _id: this.$store.state.rooms[randomRoomIndex]._id,
                                name: this.$store.state.rooms[randomRoomIndex].name,
                                preposition: this.$store.state.rooms[randomRoomIndex].preposition
                            }
                        }

                        const randomActivityIndex = Math.floor(Math.random() * activityArray.length);
                        cat.crime_activity = activityArray[randomActivityIndex];
                    }

                    // commit state to database for AIP.AI Webhook
                    Axios.post('/api/scenario/create', this.$store.state).then(
                        (result) => {
                            this.$store.dispatch('setScenarioId', result.data);
                            this.$store.dispatch('setActivities', activityArray);
                        }
                    );

                }).catch(function(err){
                    console.error(err);
                });
            },
            catChangesRoom: function(cat, updateDB) {
                return () => {
                    this.$store.dispatch('catChangesRoom', cat);

                    if(updateDB) {
                        this.updateRoomsInDB();
                    }

                    const sleepingTime = Math.round(Math.random() * 50 + 10) * 1000;
                    setTimeout(this.catChangesRoom(cat, true), sleepingTime);
                }
            },
            updateRoomsInDB: function() {
                Axios.put('/api/scenario/' + this.$store.state.scenarioId + '/updateRooms', {
                    rooms: this.$store.state.rooms
                })
                .catch((error) => {
                    console.error(error);
                });
            },
            accuseCat: function() {
                let cat = null;

                for(let currentCat of this.$store.state.allCats) {
                    if(this.accusedCatName.toLowerCase() == currentCat.name.toLowerCase()) {
                        cat = currentCat;
                    }
                }

                if(cat) {
                    Axios.put('/api/scenario/' + this.$store.state.scenarioId + '/guessGuiltyCat', {
                        cat: cat
                    })
                    .then((answer) => {
                       
                        if(answer.data) {
                            this.answer = true;
                        } else {
                            this.answer = false;
                        }

                        this.accusedCat = cat;
                        this.gameEnded = true;
                        this.clearTimeouts();

                        this.$store.dispatch('endGame');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                } else {
                    this.showErrorMsg = true;
                }
            },
            clearTimeouts: function() {
                let id = window.setTimeout(function() {}, 0);

                while (id--) {
                    window.clearTimeout(id); // will do nothing if no timeout with id is present
                }
            },
            clearErrorMsg: function() {
                this.showErrorMsg = false;
            },
            playAgain: function() {
                this.$store.dispatch('resetGame');
                this.initializeState();

                this.accusedCatName = '';
                this.gameEnded = false;
                this.answer = null;
                this.accusedCat = null;
                this.showErrorMsg = false;
            }
        }
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';
    
    section {
        
        h1 {
            font-size: 30px;
        }

        h2 {
            font-size: 24px;
        }

        &.small-margin {
            margin-top: 40px;
        }

        &.section-pink {
            background-color: lighten($pink, 10%);
            position: relative;

            $triangleHeight: 20;

            &::before, &::after {
                content: '';
                width: 100%;
                height: #{$triangleHeight}px;
                display: block;
                position: absolute;
                background-size: 30px #{$triangleHeight}px;
            }

            &::before {
                top: -#{$triangleHeight}px;
                background-image: url('/img/triangle-up.png');
            }

            &::after {
                bottom: -#{$triangleHeight}px;
                background-image: url('/img/triangle-down.png');
            }

            .content {
                padding-left: 270px;
                min-height: 260px;

                img {
                    $imgSize: 200;

                    height: #{$imgSize}px;
                    position: absolute;
                    top: calc(50% - #{$imgSize / 2}px);
                    left: 0;
                }
            }
        }

        .game-over {
            color: $pink;
            padding: 25px;
            padding-left: 50px;
            position: relative;
            border: 2px solid $pink;

            p {
                color: $black;
            }

            img {
                position: absolute;
                right: 20px;
                bottom: 0;
                width: 180px;
            }
        }

        .play-again-btn {
            margin: 20px auto;
        }

        .input {
            width: 286px;

            input {
                float: left;
                border-right: none;
            }

            .error-msg {
                color: $pink;
                font-size: 16px;
                margin-top: 10px;
            }
        }
    }

</style>
