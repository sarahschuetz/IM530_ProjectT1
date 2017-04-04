<template>
    <div>
        <navigation/>
        <nuxt/>
        <chat-bar/>
    </div>
</template>

// --------------------------------------------------

<script>

    import Navigation from '~components/Navigation.vue'
    import ChatBar from '~components/Chat/ChatBar.vue'

    export default {
        components: {
            Navigation,
            ChatBar
        }
    }
    
</script>

// --------------------------------------------------

<style lang="sass">

</style>
