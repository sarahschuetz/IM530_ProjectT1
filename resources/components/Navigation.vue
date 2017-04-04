<template>
    <nav>
        <ul>
            <li><nuxt-link to="/contact">contact us</nuxt-link></li>
            <li><nuxt-link to="/statistics">statistics</nuxt-link></li>
            <li><nuxt-link to="/rules">rules</nuxt-link></li>
            <li><nuxt-link to="/">play</nuxt-link></li>
        </ul>
    </nav>
</template>

// --------------------------------------------------

<script>

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    nav {
        ul {
            li {
                padding: 10px 20px;
                float: right;
                list-style-type: none;

                a {
                  text-decoration: none;
                }
            }
        }
    }

</style>
