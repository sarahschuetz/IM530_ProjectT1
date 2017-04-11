<template>
    <section>
        <h1>Welcome home, Sarah!</h1>
        <p>You are a student at FH Hagenberg.</p>
    </section>
</template>

// --------------------------------------------------

<script>

    import Vuex from 'vuex';

    export default {

        layout: 'chat',

        mounted: function() {
            this.$store.dispatch('loadCats');
        }
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

</style>
