<template>
    <section class="HomePage__container">
        <img
            class="HomePage__logo"
            alt="App One A Day logo"
            src="@/assets/img/logo.png">
        <h1>Un par jour</h1>
        <h2>Pour la planète, ramassons un déchet chaque jour</h2>
        <router-link class="button button__classic" to="/dechets">J'ai ramassé</router-link>
    </section>
</template>
<script>
export default {
    name: "HomePage"
}
</script>
<style lang="scss">
    .HomePage {
        &__container {
            margin-top: 15px;
            padding: 0 1.5rem;
            font-size: 0.75rem;

            @include for-tablet-portrait-up {
                padding: 0;
                font-size: 1rem;
            }
        }

        &__logo {
            width: 75px;
            margin: 0 auto;

            @include for-tablet-portrait-up {
                width: 100px;
            }
        }
    }
</style>