<template>
    <section>
        <div class="content">
            <h1 class="title center-text">{{ error.statusCode }}</h1>
            <h2 class="info center-text"> {{ error.message }}</h2>
        </div>
        <img class="waffles" src="/img/cats-04.png" alt="Waffles">
    </section>
</template>

// --------------------------------------------------

<script>

    export default {
        props: ['error']
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    h1 {
        font-size: 70px;
        margin-top: 7%;
        margin-bottom: 0;
    }

    .waffles {
        width: 200px;
        position: absolute;
        bottom: 120px;
        left: 50%;
        margin-left: -100px;
    }

</style>
