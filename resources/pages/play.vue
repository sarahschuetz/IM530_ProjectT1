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

            Promise.all([cats, rooms]).then((result) => {

                this.$store.dispatch('loadCats', result[0].data);
                this.$store.dispatch('loadRooms', result[1].data);

                for(let cat of result[0].data) {
                    this.catChangesRoom(cat)();
                }

                // commit state to database for AIP.AI Webhook
                Axios.post('/api/scenario/create', this.$store.state).then(
                    (result) => {
                        this.$store.dispatch('setScenarioId', result.data);
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
            catChangesRoom: function(cat) {
                return () => {
                    this.$store.dispatch('catChangesRoom', cat);
                    let sleepingTime = Math.round(Math.random() * 50 + 10) * 1000;
                    setTimeout(this.catChangesRoom(cat), sleepingTime);
                }
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
    }

</style>
