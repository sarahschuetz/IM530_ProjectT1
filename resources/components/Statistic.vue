<template>
    <div class="cat">
        <h2 class="center-text">{{ cat.name }}</h2>
        <img :src="catImg" :alt="cat.name"/>
        <progress-bar class="bar" :value="cat.counter_guilty" :absolute="numberOfGames" colorClass="guilty" :barSize="125"/>
        <progress-bar class="bar" :value="cat.counter_accused" :absolute="numberOfGames" colorClass="accused" :barSize="125"/>
    </div>
</template>

// --------------------------------------------------

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
    @import '~assets/scss/mixins';

    .cat {
        @include responsive-property('width', 100%, 175px, 243px);
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
            margin-left: 15%;
            @include responsive-property('margin-left', 30%, 15%, 57px);
        }

    }

</style>
