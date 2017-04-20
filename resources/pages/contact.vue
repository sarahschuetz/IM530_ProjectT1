<template>
    <div>
        <section>
            <div class="content">
                <h1 class="center-text">Got any questions?</h1>
                <p class="center-text">Contact us!</p>
                <div class="small-width">
                    <p class="center-text column-2">
                        <span>Sarah Sauseng</span><br>
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

    p {
        margin-bottom: 50px;

        &.column-2 {
            width: 50%;
            float: left;
        }

        span {
            font-weight: 700;
        }
    }

    .text-input {
        clear: left;
        height: 45px;
        margin-bottom: 25px;
        padding-right: 100px;

        input, textarea {
            width: calc(100% - 100px);
        }
    }

    label, textarea, input {
        float: left;
    }

    label, button {
        width: 100px;
    }
    
    button {
        width: calc(100% - 200px);
        margin-left: 100px;
        clear: left;
        margin-top: 25px;
        margin-bottom: 250px;
    }

    .small-width {
        width: 450px;
        margin: 0 auto;

        p {
            margin-top: 0;
        }
    }

</style>
