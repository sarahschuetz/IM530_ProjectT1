<template>
    <section>
        <div class="content">
            <h1 class="center-text">Statistics</h1>
            <statistic v-for="cat in cats" key="cat._id" :cat="cat" class="statistic" />
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
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    .statistic {
        margin-bottom: 50px;

        &:last-child {
            margin-bottom: 250px;
        }
    }

</style>
