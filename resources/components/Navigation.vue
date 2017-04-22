<template>
    <div>
        <div class="menu-icon" @click="openMenu"><i class="material-icons">&#xE5D2;</i></div>
        <nav :class="classes">
            <div class="close-icon" @click="closeMenu"><i class="material-icons">&#xE5CD;</i></div>
            <ul>
                <li @click.prevent="closeMenu"><nuxt-link to="/play">play</nuxt-link></li>
                <li @click.prevent="closeMenu"><nuxt-link to="/rules">rules</nuxt-link></li>
                <li @click.prevent="closeMenu"><nuxt-link to="/statistics">statistics</nuxt-link></li>
                <li @click.prevent="closeMenu"><nuxt-link to="/contact">contact us</nuxt-link></li>
            </ul>
        </nav>
    </div>
</template>

// --------------------------------------------------

<script>

    export default {
        data: function() {
            return {
                showMobileMenu: false
            }
        },
        methods: {
            openMenu: function() {
                this.showMobileMenu = true;
            },
            closeMenu: function() {
                this.showMobileMenu = false;
            }
        },
        computed: {
            classes: function() {
                return this.showMobileMenu ? 'menu open' : 'menu';
            }
        }
    } 

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';
    @import '~assets/scss/mixins';

    nav.menu {
        box-sizing: border-box;
        padding-top: 20px;
        display: block;
        top: 0;
        z-index: 5;
        text-align: center;
        transition: all .4s ease-in;

        @include responsive-property('background-color', $pink, $pink, transparent);
        @include responsive-property('position', fixed, fixed, absolute);
        @include responsive-property('left', -100%, -100%, auto);
        @include responsive-property('right', auto, auto, 100px);
        @include responsive-property('width', 100%, 100%, 380px);
        @include responsive-property('height', 100%, 100%, auto);

        &.open {
            left: 0;
            transition: all .5s ease-out;
        }
            
        ul {
            padding: 0;

            li {
                list-style-type: none;

                @include responsive-property('font-size', 20px, 20px, 16px);
                @include responsive-property('padding', 20% 0 0, 20% 0 0, 10px 20px);
                @include responsive-property('float', none, none, left);

                a {
                    text-decoration: none;
                    @include responsive-property('color', $white, $white, $black);

                    &:hover {
                        &:not(.nuxt-link-active) {
                            @include responsive-property('color', $black, $black, $pink);
                        }
                    }

                    &.nuxt-link-active {
                        padding-bottom: 5px;
                        @include responsive-property('border-bottom', 2px solid $black, 2px solid $black, 2px solid $pink);
                    }
                }
            }
        }

        .close-icon {
            position: relative;
            top: 25px;
            left: 40px;
            width: 30px;
            height: 30px;
            @include responsive-property('display', block, block, none);
        }
    }

    .menu-icon {
        @include responsive-property('display', block, block, none);

        i {
            position: absolute;
            top: 40px;
            left: 46px;
            font-size: 32px !important;
        }
    }

</style>
