<template>
    <section class="trashCard__container">
        <div class="trashCard__card row row--center">
            <div class="col-12">
                <img :src="trashItem.image" alt="" class="trashCard__img">
                <div class="trashCard__body">
                    <h1 class="trashCard__name">{{ trashItem.name }}</h1>
                    <p class="trashCard__description">Description: {{ trashItem.description }}</p>
                    <p class="trashCard__category">Categorie: {{ trashItem.category }}</p>
                    <p class="trashCard__weight">Poids: {{ trashItem.weight }}</p>
                </div>
            </div>
            <div class="col-12">
                <div class="trashCard__buttons">
                    <button class="button trashCard__button--add" @click="addToTrashList">Ajouter</button>
                    <button
                        class="button trashCard__button--remove"
                        @click="removeFromTrashList"
                        :disabled="!trashPickedFromStore"
                        :class="{'trashCard__button--disabled': !trashPickedFromStore}"
                    >Retirer</button>
                </div>
            </div>
            <div class="col-12">
                <div v-if="trashPickedFromStore">
                    <p class="">Vous avez ramassé pour {{ trashPickedFromStore.weight }} kg de ce déchet</p>
                    <p class="">Vous avez ramassé {{ trashPickedFromStore.count }} fois ce déchet</p>
                </div>
                <p v-else>Vous n'avez pas encore ramassé ce déchet</p>
            </div>
        </div>
        <Alert-component
            v-if="trashPicked || trashDropped"
            :message="trashPicked ? 'Ajouté !' : 'Retiré !'"
        />
    </section>
</template>
<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import AlertComponent from '../components/Alert'
export default {
    components: {
        AlertComponent
    },
    setup() {
        const route = useRoute()
        const store = useStore()
        const trashList = store.state.trashList
        const trashItem = trashList.find(item => item.name.replace(/ /g, "-").toLowerCase() === route.params.name)
        const trashPicked = ref(false)
        const trashDropped = ref(false)

        function addToTrashList() {
            store.dispatch('addToTrashList', trashItem)
            trashPicked.value = true
            deleteAlert(trashPicked)
        }
        function removeFromTrashList() {
            store.dispatch('removeFromTrashList', trashItem)
            trashDropped.value = true
            deleteAlert(trashDropped)
        }

        function deleteAlert(alert) {
            setTimeout(() => {
                alert.value = false
            }, 2000)
        }

        const trashPickedListStore = store.state.trashPickedList
        const trashPickedFromStore = computed(() => trashPickedListStore.find(item => item.name.includes(trashItem.name)))

        return {
            trashPicked,
            trashDropped,
            trashItem,
            addToTrashList,
            removeFromTrashList,
            trashPickedFromStore
        }
    }
}
</script>
<style lang="scss">
.trashCard {
    &_container {
        position: relative;
    }
    &__card {
        max-width: 90%;
        margin: 0 auto;
        margin-top: 25px;

        @include for-tablet-portrait-up {
            justify-content: space-evenly;
        }

        .col-12 {
            @include for-tablet-portrait-up {
                display: flex;
                flex-flow: row;
                justify-content: space-evenly;
                align-items: center;

                .trashCard__img {
                    width: 50%;
                    height: 100%;
                }
            }
        }
    }
    &__img {
        width: 100%;
        height: 50%;
        object-fit: cover;

        @include for-tablet-portrait-up {
            width: 50%
        }
    }

    &__name {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 20px;
    }

    &__description,
    &__category,
    &__weight {
        font-size: 1em;
        margin-bottom: 20px;
    }

    &__button {
        &--add {
            background-color: #00b894;
            color: #fff;
            border-color:#00b894;
            margin-right: 10px;
            &:hover {
                background-color: #2b8d79;
                border-color: #2b8d79;
            }
        }
        &--remove {
            background-color: #e53935;
            border-color: #e53935;
            color: #fff;
            &:hover {
                background-color: #b71c1c;
                border-color: #b71c1c;
            }
        }
        &--add, &--remove {
            cursor: pointer;
        }

        &--disabled {
            background-color: #e0e0e0;
            border-color: #e0e0e0;
            color: #000;
            cursor: not-allowed;
        }
    }
}
</style>