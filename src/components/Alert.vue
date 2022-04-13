<template>
    <section class="alert__container">
        <p class="alert__title">{{ message }}</p>
    </section>
</template>
<script>
export default {
    name: 'AlertComponent',
    props: {
        message: {
            type: String,
            required: true
        }
    },
    setup() {
        return {
        }
    }
}
</script>
<style lang="scss">
    .alert {
        &__container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #6388f0;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
            font-weight: bold;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #6388f0;
            @include keyframes(roll-down) {
                0% {
                    top: 5%;
                }
                100% {
                    top: 10%;
                    display: none;
                }
            }
            @include animate(roll-down, 2s, linear, 1);
        }
    }

</style>