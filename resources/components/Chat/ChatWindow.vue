<template>
    <div class="chat-window">
        <div class="name-bar" :style="{borderBottom: borderStyle}">
            <cat-icon class="img" :cat="$store.state.activeCat" />
            <div class="text">
                {{ $store.state.activeCat.name }}
                <i class="material-icons close-icon"
                   v-on:click="$store.dispatch('endChat', $store.state.activeCat)">&#xE5CD;</i>
            </div>
        </div>
        <div class="messages">
            <span v-for="message in $store.state.activeCat.messages">
                <cat-message v-if="message.type == 'cat'" :message="message.text" />
                <user-message v-if="message.type == 'user'" :message="message.text" />
            </span>
        </div>
        <textarea type="text" class="input-area" placeholder="Enter message"
                  v-model="message" @keydown.enter.prevent.stop="sendMessage(message)"></textarea>
    </div>
</template>

// --------------------------------------------------

<script>

    import CatIcon from '~components/Chat/CatIcon.vue';
    import CatMessage from '~components/Chat/CatMessage.vue';
    import UserMessage from '~components/Chat/UserMessage.vue';

    export default {
        data: function() {
           return {
                message: '',
                container: null
           }
        },
        mounted: function() {
            this.container = this.$el.querySelector(".messages");
        },
        components: {
            CatIcon,
            CatMessage,
            UserMessage
        },
        watch: {
            messages: function () {
                this.scrollToEnd();
            }
        },
        methods: {
            sendMessage: function(message) {
                this.message = '';
                this.$store.dispatch('sendMessage', {message: message, cat: this.$store.state.activeCat, scenarioId: this.$store.state.scenarioId});
            },
            scrollToEnd: function() {    
                this.$nextTick(() => {
                    this.container.scrollTop = this.container.scrollHeight;
                });
            },
        },
        computed: {
            borderStyle: function() {
                return 2 + 'px solid ' + this.$store.state.activeCat.color;
            },
            messages: function() {
                return this.$store.state.activeCat.messages;
            }
        }
    }

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/variables';

    .chat-window {
        width: 275px;
        height: 320px;
        float: right;
        background-color: $white;
        margin-right: 20px;
        position: fixed;
        bottom: 0;
        right: 100px;
        box-shadow: 0px 0px 20px $grey-shadow;

        .name-bar {
            height: 17px;
            padding: 8px;

            .img {
                $size: 45;

                width: #{$size}px;
                height: #{$size}px;
                border-radius: #{$size / 2}px;
                float: left;
                margin-right: 10px;
                position: relative;
                z-index: 2;
            }

            .text {
                font-size: 12px;
                font-weight: 600;

                .close-icon {
                    display: block;
                    float: right;
                    width: 16px;
                    height: 16px;
                    font-size: 16px;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        .messages {
            box-sizing: border-box;
            height: 251px;
            width: 100%;
            position: absolute;
            overflow-y: scroll;
            padding: 30px 10px 10px;
        }

        textarea.input-area {
            box-sizing: border-box;
            height: 34px;
            border: none;
            border-top: $grey-light 1px solid;
            padding: 8px 12px;
            width: 100%;
            resize: none;
            overflow: hidden;
            position: absolute;
            bottom: 0;
            left: 0;

            &::placeholder {
                color: $grey-placeholder;
            }

            &:focus {
                outline: none;
            }
        }
    }    

</style>