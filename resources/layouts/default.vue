<template>
    <div>
        <logo/>
        <navigation/>
        <main>
            <nuxt/>
        </main>
    </div>
</template>

// --------------------------------------------------

<script>

    import Navigation from '~components/Navigation.vue'
    import Logo from '~components/Logo.vue'

    export default {
        components: {
            Navigation,
            Logo
        }
    }

</script>

// --------------------------------------------------

<style lang="sass">

</style>
