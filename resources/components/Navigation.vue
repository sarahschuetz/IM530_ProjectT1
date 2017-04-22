<template>
    <nav>
        <ul>
            <li><nuxt-link to="/contact">contact us</nuxt-link></li>
            <li><nuxt-link to="/statistics">statistics</nuxt-link></li>
            <li><nuxt-link to="/rules">rules</nuxt-link></li>
            <li><nuxt-link to="/play">play</nuxt-link></li>
        </ul>
    </nav>
</template>

// --------------------------------------------------

<script>

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';

    nav {
        padding-right: 100px;
        padding-top: 20px;

        ul {
            li {
                padding: 10px 20px;
                float: right;
                list-style-type: none;

                a {
                  text-decoration: none;
                  color: $black;

                  &:hover {
                      &:not(.nuxt-link-active) {
                          color: $pink;
                      }
                  }

                  &.nuxt-link-active {
                      padding-bottom: 5px;
                      border-bottom: 2px solid $pink;
                  }
                }
            }
        }
    }

</style>
