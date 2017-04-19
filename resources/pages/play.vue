<template>
    <div>
        <section>
            <h1>Welcome home, Sarah S.!</h1>
            <p>You are a student at FH Hagenberg.</p>
        </section>
        <section>
            <House/>
            <p v-if="$store.state.currentRoom != null">{{ location }}</p>
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
                Axios.post('/api/scenario/create', this.$store.state);

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

</style>
