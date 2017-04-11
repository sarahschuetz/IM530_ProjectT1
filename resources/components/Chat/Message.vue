<template>
    <div class="message">
        {{ message }}
    </div>
</template>

// --------------------------------------------------

<script>
    
    export default {
        props: ['message']
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    .message {
        max-width: 175px;
        border-radius: 15px;
        padding: 10px 13px;
        font-size: 12px;
        margin-bottom: 10px;
    }


</style>