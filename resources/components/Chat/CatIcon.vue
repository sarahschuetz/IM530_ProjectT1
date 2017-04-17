<template>
    <div class="cat-icon"
         v-on:click="$store.dispatch('startChat', {new: cat, current: $store.state.activeCat})"
         v-bind:style="styling"></div>
    </div>
</template>

// --------------------------------------------------

<script>

    export default {
        props: ['cat'],
        computed: {
            styling:  function() {
                return {
                    backgroundColor: this.cat.color,
                    backgroundImage: 'url(/img/cats-06.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '5px 8px'
                }
            }
        }
    }
    
</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';

        .cat-icon {
            $size: 50;

            width: #{$size}px;
            height: #{$size}px;
            border-radius: #{$size / 2}px;
        }

</style>