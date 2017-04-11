<template>
    <message class="cat-message" v-bind:message="message"
             v-bind:style="{backgroundColor: $store.state.activeCat.color}" />
</template>

// --------------------------------------------------

<script>

    import Message from '~components/Chat/Message.vue';

    export default {
        props: ['message'],
        components: {
            Message
        }
    }
    
</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';

    .cat-message {
        clear: both;
        float: left;
    }

</style>