<template>
    <div>
        <navigation/>
        <main>
            <nuxt/>
        </main>
        <chat-bar/>
        <page-footer text="Have fun!"/>
        <chat-window class="front"/>
    </div>
</template>

// --------------------------------------------------

<script>

    import ChatBar from '~components/Chat/ChatBar.vue'
    import ChatWindow from '~components/Chat/ChatWindow.vue'
    import Navigation from '~components/Navigation.vue'
    import PageFooter from '~components/PageFooter.vue'

    export default {
        components: {
            ChatWindow,
            ChatBar,
            Navigation,
            PageFooter
        }
    }
    
</script>

// --------------------------------------------------

<style lang="scss" scoped>
    
    main {
        padding-bottom: 100px;
    }

    .front {
        z-index: 100;
    }    

</style>
