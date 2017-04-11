<template>
    <div class="chat-bar">
        <logo/>
        <div v-for="cat in $store.state.availableCats"
             class="cat-icon"
             v-bind:style="{backgroundColor: cat.color}"
             v-on:click="$store.dispatch('startChat', {new: cat, current: $store.state.activeCat})"></div>
    </div>
</template>

// --------------------------------------------------

<script>

    import Logo from '~components/Logo.vue';

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
        position: fixed;
        top: 0;
        right: 0;
        padding-top: 120px;
        
        logo {
            position: absolute;
        }

        .cat-icon {
            $size: 50;

            width: #{$size}px;
            height: #{$size}px;
            border-radius: #{$size / 2}px;

            margin-bottom: 10px;
            margin-left: 25px;
            cursor: pointer;
        }
    }


</style>