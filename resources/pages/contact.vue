<template>
    <div>
        <section>
            <div class="content">
                <h1 class="center-text">Got any questions?</h1>
                <p class="center-text">Contact us!</p>
                <div class="small-width">
                    <p class="center-text column-2">
                        <span>Sarah Sauseng</span><br>
                        sarah.sauseng@me.com<br>
                        FH Hagenberg
                    </p>
                    <p class="center-text column-2">
                        <span>Sarah Schütz</span><br>
                        sarahschuetz@gmx.at<br>
                        FH Hagenberg
                    </p>
                </div>
                <form>
                    <div class="text-input">
                        <label>Subject:</label>
                        <input/>
                    </div>
                    <div class="text-input">
                        <label>Message:</label>
                        <textarea></textarea>
                    </div>
                    <button type="submit" class="btn filled-pink">send</button>
                </form>
            </div>
        </section>
    </div>
</template>

// --------------------------------------------------

<script>

</script>

// --------------------------------------------------

<style lang="scss" scoped>

    @import '~assets/scss/mixins';

    section {
        padding-bottom: 250px;

        p {
            margin-bottom: 50px;

            &.column-2 {
                @include responsive-property('width', 100%, 186px, 50%);
                float: left;
            }

            span {
                font-weight: 700;
            }
        }

        .text-input {
            clear: both;
            height: 45px;
            margin: 0 auto 25px;
            @include responsive-property('padding-right', 0, 0, 0, 100px);
            @include responsive-property('width', 100%, 100%, 600px, 100%);

            input, textarea {
                @include responsive-property('width', 100%, 100%, 400px, calc(100% - 200px));
                float: right;
                @include responsive-property('margin-right', 0, 0, 100px);
            }
        }

        label, textarea, input {
            float: left;
        }

        label {
            width: 100px;
            @include responsive-property('margin-top', 15px, 15px, 9px);
            @include responsive-property('margin-bottom', 5px, 5px, 0);
        }

        button {
            @include responsive-property('width', 100%, 100%, 400px, calc(100% - 200px));
            clear: both;
            display: block;
            position: relative;
            top: 25px;
            margin: 0 auto;
        }

        .small-width {
            @include responsive-property('width', 100%, 450px);
            margin: 0 auto;

            p {
                margin-top: 0;
            }
        }
    }

</style>
