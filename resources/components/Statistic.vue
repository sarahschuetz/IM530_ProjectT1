<template>
    <div class="catBox">
        <div class="cat">
            <h2 class="center-text">{{ cat.name }}</h2>
            <img :src="catImg" :alt="cat.name"/>
            <progress-bar :value="5" :absolute="100" colorClass="guilty"/>
            <progress-bar :value="100" :absolute="100" colorClass="accused"/>
        </div>
    </div>
</template>

// --------------------------------------------------  // TODO: LEGENDE !!!!

<script>

    import ProgressBar from '~components/ProgressBar'

    export default {
        props: ['cat'],
        components: {
            ProgressBar
        },
        mounted: function() {
            console.log(this.cat);
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

    .catBox {
        width: 33%;
        position: relative;
        float: left;

        .cat {
            margin: 0 auto;
            max-width: 150px;

            img {
                width: 100%;
            }

            h2 {
                font-size: 20px;
            }
        }

    }

</style>
