<template>
    <div>
        <logo/>
        <navigation/>
        <main>
            <nuxt/>
        </main>
        <chat-bar/>
        <page-footer text="Have fun!"/>
        <chat-window v-if="$store.state.activeCat" class="front"/>
    </div>
</template>

// --------------------------------------------------

<script>

    import ChatBar from '~components/Chat/ChatBar.vue'
    import ChatWindow from '~components/Chat/ChatWindow.vue'
    import Logo from '~components/Logo.vue'
    import Navigation from '~components/Navigation.vue'
    import PageFooter from '~components/PageFooter.vue'

    export default {
        components: {
            ChatWindow,
            ChatBar,
            Logo,
            Navigation,
            PageFooter
        }
    }
    
</script>

// --------------------------------------------------

<style lang="scss" scoped>
    
    main {
        padding-bottom: 220px;
    }

    .front {
        z-index: 100;
    }    

</style>
