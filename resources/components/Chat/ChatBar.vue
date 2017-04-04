<template>
    <div class="chat">
        <chat-window></chat-window>
        <chat-window></chat-window>
        <chat-window></chat-window>
    </div>
</template>

// --------------------------------------------------

<script>

    import ChatWindow from '~components/Chat/ChatWindow.vue'

    export default {
        components: {
            ChatWindow
        }
    }
    
</script>

// --------------------------------------------------

<style lang="scss" scoped>

    .chat {
        width: 100%;
        height: 320px;
        position: fixed;
        bottom: 0;
    }

</style>