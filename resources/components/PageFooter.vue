<template>
    <div class="footer">
        <h2 class="center-text">{{ text }}</h2>
    </div>
</template>

// --------------------------------------------------

<script>

    export default {
        props: ['text']
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';

    .footer {
        background-color: lighten($pink, 10%);
        padding: 40px 0;
        position: relative;

        $triangleHeight: 20;
        
        h2 {
            margin: 0;
        }

        &::before {
            content: '';
            width: 100%;
            height: #{$triangleHeight}px;
            display: block;
            position: absolute;
            background-size: 30px #{$triangleHeight}px;
            top: -#{$triangleHeight}px;
            background-image: url('/img/triangle-up.png');
        }
    }

</style>
