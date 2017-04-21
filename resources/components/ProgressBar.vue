<template>
    <div class="progressBar">
        <div :class="classes" :style="styling"></div><div>{{ percentage }}%</div>
    </div>
</template>

// --------------------------------------------------

<script>

    import ProgressBar from '~components/ProgressBar'

    export default {
        props: ['value', 'absolute', 'colorClass', 'barSize'],
        components: {
            ProgressBar
        },
        computed: {
            catImg: function() {
                return '/img/' + this.cat.img;
            },
            classes: function() {
                return "progress " + this.colorClass;
            },
            percentage: function() {
                if(this.absolute > 0) {
                    return Math.round(this.value * 100 / this.absolute);
                }
                return 0;
            },
            styling: function() {
                return {
                    width: this.barSize / 100 * this.percentage + 'px'
                };
            }
        }
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';
    @import '~assets/scss/helpers';

    .progressBar {
        width: 88%;
        margin: 0 auto;

        .progress {
            height: 20px;
            float: left;
            clear: left;
            margin-right: 5px;

            &.accused {
                background-color: lighten($pink, 10%);
            }

            &.guilty {
                background-color: $pink;
            }
        }
    }

</style>
