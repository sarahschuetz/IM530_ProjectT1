<template>
    <div class="cat">
        <h2 class="center-text">{{ cat.name }}</h2>
        <img :src="catImg" :alt="cat.name"/>
        <progress-bar class="bar" :value="cat.counter_guilty" :absolute="numberOfGames" colorClass="guilty" :barSize="125"/>
        <progress-bar class="bar" :value="cat.counter_accused" :absolute="numberOfGames" colorClass="accused" :barSize="125"/>
    </div>
</template>

// --------------------------------------------------  // TODO: LEGENDE !!!!

<script>

    import ProgressBar from '~components/ProgressBar'

    export default {
        props: ['cat', 'numberOfGames'],
        components: {
            ProgressBar
        },
        computed: {
            catImg: function() {
                return '/img/' + this.cat.img;
            }
        }
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';
    @import '~assets/scss/helpers';

    .cat {
        width: 33%;
        position: relative;
        float: left;

        img {
            margin: 0 auto;
            display: block;
            width: 150px;
            border-bottom: 2px $black solid;
        }

        h2 {
            font-size: 20px;
        }

        .bar {
            margin-top: 5px;
            margin-left: 57px;
        }

    }

</style>
