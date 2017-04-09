<template>
    <message class="cat-message" />
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

    .cat-message {
        background-color: $pink;
        clear: both;
        float: left;
    }

</style>