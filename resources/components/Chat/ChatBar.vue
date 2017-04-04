<template>
    <div class="chat-bar">
        <logo/>
    </div>
</template>

// --------------------------------------------------

<script>

    import Logo from '~components/Logo.vue'

    export default {
        components: {
            Logo
        }
    }
    
</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';

    .chat-bar {
        width: 100px;
        height: 100%;
        background-color: $white;
        position: fixed;
        top: 0;
        right: 0;
        
        logo {
            position: absolute;
        }
    }


</style>