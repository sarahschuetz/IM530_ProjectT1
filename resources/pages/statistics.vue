<template>
    <section>
        <div class="content">
            <h1 class="center-text">Statistics</h1>
            <statistic v-for="cat in cats" key="cat._id" :cat="cat" :numberOfGames="numberOfGames" class="statistic" />
            <div class="legend">
                <div class="guilty">guilty</div>
                <div class="accused">accused</div>
            </div>
        </div>
    </section>
</template>

// --------------------------------------------------

<script>

    import Axios from 'axios'
    import Statistic from '~components/Statistic.vue'

    export default {
        components: {
            Statistic
        },
        data: function() {
            return {
                cats: []
            }
        },
        beforeMount: function() {

            Axios.get('/api/cats')
            .then((result) => {
               
                this.cats = result.data;

            }).catch((error) => {
                console.error(error);
            });
        },
        computed: {
            numberOfGames: function() {
                let counter = 0;

                for(let cat of this.cats) {
                    counter += cat.counter_guilty;
                }
                return counter;
            }
        }
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';

    .content {
        padding-bottom: 200px;

        .statistic {
            margin-bottom: 50px;

            &:last-child {
                margin-bottom: 250px;
            }
        }

        .legend {
            width: 200px;
            margin: 0 auto;
            margin-bottom: 25px;

            .accused, .guilty {
                display: inline-block;
                margin-right: 19px;

                &:before {
                    content: '';
                    display: inline-block;
                    width: 20px;
                    height: 10px;
                    margin-right: 10px;
                }
            }

            .guilty {
                &:before {
                    background-color: $pink;
                }
            }

            .accused {
                &:before {
                    background-color: lighten($pink, 10);
                }
            }
        }
    }

</style>
