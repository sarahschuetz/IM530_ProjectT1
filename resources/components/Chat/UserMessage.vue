<template>
    <message class="user-message" />
</template>

// --------------------------------------------------

<script>

    import Message from '~components/Chat/Message.vue';

    export default {
        components: {
            Message
        }
    }
    
</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';

    .user-message {
        background-color: $grey-light;
        clear: both;
        float: right;
    }


</style>