<template>
    <div class="chat-bar">
        <logo/>
        <cat-icon class="icon" v-for="cat in availableCats" :key="cat._id" :cat="cat"/>
    </div>
</template>

// --------------------------------------------------

<script>

    import Logo from '~components/Logo.vue';
    import CatIcon from '~components/Chat/CatIcon.vue';

    export default {
        components: {
            Logo,
            CatIcon
        },
        computed: {
            availableCats: function() {
                if(this.$store.state.currentRoom) {
                    let cats = []; // TODO: check that activeCat is not available
                    return this.$store.state.currentRoom.cats;
                }  
                return [];        
            }
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

        .icon {
            margin-bottom: 10px;
            margin-left: 25px;
            cursor: pointer;
        }
    }


</style>