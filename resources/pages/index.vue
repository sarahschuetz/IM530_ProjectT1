<template>
    <div class="background">
        <div class="introduction">
            
            <h1 class="center-text">purr, purr, purr!</h1>

            <p class="center-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br>
                Aenean commodo ligula eget dolor. Aenean massa.</p>
            
            <nuxt-link to="/play">
                <button class="btn border-pink center-block">miaow</button>
            </nuxt-link>

        </div>
    </div>
</template>

// --------------------------------------------------

<script>

    export default {
        layout: 'home',
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    .background { 
        width: 100vw;
        height: 100vh;

        .introduction {

            $width: 425;
            $height: 200;

            width: #{$width}px;
            height: #{$height}px;
            position: relative;
            top: calc(50% - #{$height / 2}px);
            margin: 0 auto;

            h1 {
                font-size: 42px;
                margin: 0;
                margin-bottom: 10px;
            }

            p {
                margin-top: 0;
                margin-bottom: 17px;
            }
        }
    }

</style>
