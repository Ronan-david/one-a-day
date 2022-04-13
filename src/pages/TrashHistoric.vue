<template>
    <List-component 
        :title="'Vos déchets ramassés'"
        :trash-list="pickedTrashList"
    />
</template>
<script>
import { useStore } from 'vuex'
import ListComponent from '../components/List'
export default {
    name: "TrashHistoric",
    components: {
        ListComponent
    },
    setup() {
        const store = useStore()
        const pickedTrashList = store.state.trashPickedList
        return {
            pickedTrashList
        }
    }
}
</script>