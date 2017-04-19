<template>
    <div>
        <img src="/img/houseplan.png" alt="plan of the house" usemap="#houseplan">

        <map name="houseplan" id="houseplan">
            <area shape="poly"
                  coords="200,115, 355,115, 355,92, 495,92, 495,277, 470,277, 470,286, 258,286, 258,276, 200,276, 200,115"
                  alt="Kitchen"
                  v-on:click="changeRoom('kitchen')">
            
            <area shape="poly"
                  coords="197,285, 469,285, 469,512, 576,512, 576,588, 387,588, 387,542, 197,539, 197,285"
                  alt="Living Room"
                  v-on:click="changeRoom('living room')">
            
            <area shape="poly"
                  coords="213,553, 375,553, 375,588, 525,588, 525,701, 213,701, 213,553"
                  alt="Bathroom"
                  v-on:click="changeRoom('bathroom')">

            <area shape="poly"
                  coords="480,316, 569,316, 569,293, 777,293, 777,309, 804,312, 822,329, 826,324, 883,385, 879,391, 895,409, 895,433, 913,433, 913,502, 579,502, 579,513, 518,513, 518,502, 480,502, 480,316"
                  alt="Bedroom"
                  v-on:click="changeRoom('bedroom')">
            
            <area shape="poly"
                  coords="536,600, 579,600, 579,512, 913,512, 913,668, 896,668, 896,700, 536,700, 536,600"
                  alt="Children's Roomy"
                  v-on:click="changeRoom('children\'s room')">

            <area shape="poly"
                  coords="527,100, 616,100, 616,118, 720,188, 720,276, 624,276, 624,294, 571,294, 571,278, 527,278, 527,100"
                  alt="Balcony"
                  v-on:click="changeRoom('balcony')">

            <area shape="rect"
                  coords="89,298, 193,542"
                  alt="Hallway"
                  v-on:click="changeRoom('hallway')">

            <area shape="rect"
                  coords="89,542, 164,703"
                  alt="Storage Room"
                  v-on:click="changeRoom('toilet')">
        </map>
    </div>
</template>

// --------------------------------------------------

<script>

    export default {
        mounted: function() {
            let ImageMap = require('image-map').ImageMap;
            ImageMap('img[usemap]');

            window.addEventListener('resize', () => {
                ImageMap('img[usemap]');
            })
        },
        methods: {
            changeRoom: function(room) {
                this.$store.dispatch('changeRoom', room);
            }
        }
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    img {
        display: block;
        width: 80vw;
        height: auto;
    }

</style>
