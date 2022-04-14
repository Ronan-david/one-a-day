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
</style>