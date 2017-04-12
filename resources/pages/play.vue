<template>
    <div>
        <section>
            <h1>Welcome home, Sarah!</h1>
            <p>You are a student at FH Hagenberg.</p>
        </section>
        <section>
            <House/>
            <p>{{ location }}</p>
        </section>
    </div>
</template>

// --------------------------------------------------

<script>

    import Vuex from 'vuex';
    import House from '~components/House.vue';

    export default {

        layout: 'chat',
        mounted: function() {
            this.$store.dispatch('loadCats');
        },
        components: {
            House
        },
        computed: {
            location: function() {
                
                let location = 'You\'re ';

                if(this.$store.state.currentLocation == 'balcony') {
                    location += 'on';
                } else {
                    location += 'in';
                }

                location += ' the ' + this.$store.state.currentLocation + '.';

                return location;
            }
        }
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

</style>
