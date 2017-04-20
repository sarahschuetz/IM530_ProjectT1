<template>
    <div class="progressBar">
        <div :class="classes" :style="styling"></div><div>{{ percentage }}</div>
    </div>
</template>

// --------------------------------------------------

<script>

    import ProgressBar from '~components/ProgressBar'

    export default {
        props: ['value', 'absolute', 'colorClass'],
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
                return (this.value * 100 / this.absolute) + '%';
            },
            styling: function() {
                return {
                    width: this.percentage
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
        margin: 0 auto 5px;

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
