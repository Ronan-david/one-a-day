<template>
    <List-component
        :title="'Liste des déchets'"
        :trash-list="trashList"
    />
</template>

<script>
import { useStore } from 'vuex'
import ListComponent from '../components/List'

export default {
    name: "TrashList",
    components: {
        ListComponent
    },
    setup() {
        const store = useStore()
        const trashList = store.state.trashList

        return {
            trashList
        }
    }
}
</script>

<style lang="scss">
    .trashList {
        &__filters {
            margin-bottom: 20px;
            flex-flow: column;

            @include for-tablet-portrait-up {
                flex-flow: row;
            }

            .trashList__input {
                margin-bottom: 10px;
                @include for-tablet-portrait-up {
                    margin: 0 20px 0 0;
                }
            }            
        }
        &__card {
            width: 150px;
            margin-bottom: 20px;
            padding: 5px;
            cursor: pointer;

            &-list {
                padding: 0 15px;

                @include for-tablet-portrait-up {
                    padding: 0 50px;
                }
            }

            &-img {
                width: 100%;
                height: 100px;
            }

            &-name {
                margin-top: 10px;
            }
        }
    }
</style>