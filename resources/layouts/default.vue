<template>
    <div>
        <logo/>
        <navigation/>
        <main>
            <nuxt/>
        </main>
        <page-footer text="miow, miow, miow!"/>
    </div>
</template>

// --------------------------------------------------

<script>

    import Navigation from '~components/Navigation.vue'
    import Logo from '~components/Logo.vue'
    import PageFooter from '~components/PageFooter.vue'

    export default {
        components: {
            Navigation,
            Logo,
            PageFooter
        }
    }

</script>

// --------------------------------------------------

<style lang="sass">

</style>
