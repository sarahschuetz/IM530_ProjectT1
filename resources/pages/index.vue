{{{{raw}}}}
<template>
    <section class="container">
        <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
        <h1 class="title">Universal Vue.js Applications Framework</h1>
        <nuxt-link class="button" to="/about">About page</nuxt-link>
        <div>{{foo}}</div>
    </section>
</template>
{{{{/raw}}}}

<script>
export default {
  data: function() {
    return {
      foo: 'Hi!'
    }
  }
}
</script>

<style scoped>
    .title {
      margin: 50px 0;
    }
</style>
