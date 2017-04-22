<template>
    <div class="cat-icon"
         @click="$store.dispatch('startChat', cat)"
         :style="styling"></div>
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
                    backgroundImage: 'url(/img/' + this.cat.img + ')',
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