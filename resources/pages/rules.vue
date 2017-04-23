<template>
    <section>
        <div class="content">
            <h1 class="center-text">Rules</h1>
            
            <p> The rules are very simple: "Talk" to your cats to find out who wasn't well-behaved.
            How you find that out is entirely up to you, but don't think your cats will tell you everything!</p>
            

            <h2>Goal of the game</h2>

            <p>The goal of the game is to find out who did the crime. That cat will get no treats for the whole day!<br>
            Be careful not to accuse the wrong cat. You only get one chance!</p>


            <h2>How to reach the goal</h2>

            <p>To get more information you can have a little chat with your cats.
            You can onla talk to one cat a time and only with cats, that are in the same room as you are.
            From time to time the cats will switch the rooms. However the they are kind enough not to change the room when you are currently talking to them.</p>

            <p>You can switch the room yourself if click on a room in the map. The text above gives you information about were you are at the moment.</p>

            <h2>Interaction with the cats</h2>

            <p>If you and one of your cats are in the same room, you can talk to her.
            That a cat is available is visualized by displaying an icon with their face below the logo.
            You can click on it to start interacting with the cat.</p>

            <p>Possible questions for the cat are for example:</p>
            <p>What is your name?<br>
            Where are you?<br>
            </p>

            <nuxt-link to="/play">
                <button class="center-block btn filled-pink">Play</button>
            </nuxt-link>

        </div>
    </section>
</template>

// --------------------------------------------------

<script>

</script>

// --------------------------------------------------

<style lang="scss" scoped>
    .content {
        padding-bottom: 250px;

        button {
            margin-top: 50px;
        }
    }
</style>
