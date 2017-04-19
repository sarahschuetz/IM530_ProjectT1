<template>
    <div class="background">
        <div class="introduction">
            
            <h1 class="center-text">purr, purr, purr!</h1>

            <p class="center-text">
                You love cats? Who doesn't!<br>
                Nevertheless they sometimes make us crazy.</p>
            
            <nuxt-link to="/play">
                <button class="btn border-pink center-block">miaow</button>
            </nuxt-link>

        </div>
        <div id="cats">
            <div class="cat"><img src="~static/img/cats-01.png" alt="Buttercup"></div>
            <div class="cat"><img src="~static/img/cats-02.png" alt="Buttercup"></div>
            <div class="cat"><img src="~static/img/cats-03.png" alt="Buttercup"></div>
            <div class="cat"><img src="~static/img/cats-04.png" alt="Buttercup"></div>
            <div class="cat"><img src="~static/img/cats-05.png" alt="Buttercup"></div>
            <div class="cat"><img src="~static/img/cats-06.png" alt="Buttercup"></div>
        </div>
    </div>
</template>

// --------------------------------------------------

<script>

    export default {
        layout: 'home'
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/mixins';

    .background { 
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;

        .introduction {

            $height: 200;

            height: #{$height}px;
            position: relative;
            top: calc(45% - #{$height / 2}px);
            margin: 0 auto;

            h1 {
                font-size: 42px;
                @include responsive-property("font-size", 30px, 42px);
                margin: 0;
                @include responsive-property("margin-top", 12px, 0);
                margin-bottom: 10px;
            }

            p {
                margin-top: 0;
                margin-bottom: 17px;
                @include responsive-property("font-size", 13px, 16px);
            }
        }

        #cats {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 30%;
            padding: 0 20px;
            box-sizing: border-box;

            .cat {
                height: 100%;
                width: calc(100% / 6);
                position: relative;
                float: left;

                img {
                    position: absolute;
                    bottom: 0;
                    left: 0; 
                    right: 0; 
                    max-height: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                }
            }
        }
    }

</style>
