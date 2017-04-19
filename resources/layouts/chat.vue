<template>
    <div>
        <navigation/>
        <main>
            <nuxt/>
        </main>
        <chat-bar/>
        <chat-window/>
    </div>
</template>

// --------------------------------------------------

<script>

    import Navigation from '~components/Navigation.vue'
    import ChatBar from '~components/Chat/ChatBar.vue'
    import ChatWindow from '~components/Chat/ChatWindow.vue'

    export default {
        components: {
            Navigation,
            ChatWindow,
            ChatBar
        }
    }
    
</script>

// --------------------------------------------------

<style lang="scss" scoped>
    
    main {
        padding-bottom: 300px;
    }

</style>
