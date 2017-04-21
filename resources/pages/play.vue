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
        <section>
            <div class="content">
                <h2 v-if="$store.state.currentRoom != null" class="center-text">{{ location }}</h2>
                <House/>
            </div>
        </section>
        <section class="small-margin">
            <div class="content">
                <h2 class="center-text">Who do you think is guilty?</h2>
                <div class="input center-block">
                    <form>
                        <input />
                        <button type="submit" class="btn filled-pink icon">
                            <i class="material-icons">&#xE163;</i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

// --------------------------------------------------

<script>

    import Axios from 'axios';
    import House from '~components/House.vue';
    import Vuex from 'vuex';

    export default {

        layout: 'chat',
        beforeMount: function() {

            let numberOfCats = Math.round(Math.random() * 3) + 3;

            let cats = Axios.get('/api/cats/random/' + numberOfCats);
            let rooms = Axios.get('/api/rooms');
            let owner = Axios.get('/api/person/random');
            let crime = Axios.get('/api/crime/random');
            let activities = Axios.get('/api/activities');

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
                            name: this.$store.state.rooms[randomRoomIndex].name
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
                console.log(err);
            });
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
            catChangesRoom: function(cat, updateDB) {
                return () => {
                    this.$store.dispatch('catChangesRoom', cat);

                    if(updateDB) {
                        this.updateRoomsInDB();
                    }

                    let sleepingTime = Math.round(Math.random() * 50 + 10) * 1000;
                    setTimeout(this.catChangesRoom(cat, true), sleepingTime);
                }
            },
            updateRoomsInDB: function() {
                Axios.post('/api/scenario/' + this.$store.state.scenarioId + '/updateRooms', {
                    rooms: this.$store.state.rooms
                })
                .catch((error) => {
                    console.error(error);
                });
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

        .input {
            width: 286px;

            input {
                float: left;
                border-right: none;
            }
            
        }
    }

</style>
