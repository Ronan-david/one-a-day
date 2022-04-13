import { createStore } from 'vuex';
import dataTrashList from '../dummy_trash_list.json'

const deepCopyObject = (obj) => {
    let tempObj = {};
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
          tempObj[key] = deepCopyObject(value);
        } else {
          tempObj[key] = value
        }
    }
    return tempObj;
}

const store = createStore({
    state () {
      return {
        trashList: dataTrashList,
        trashPickedList: []
      }
    },
    mutations: {
        ADD_TO_TRASH_LIST(state, payload) {
            let found = state.trashPickedList.find(item => {
                if (item.id === payload.id) {
                    item.count++
                    item.weight += payload.weight
                    return true
                }
            })
            if (!found) {
                payload.count = 1
                state.trashPickedList.push(deepCopyObject(payload))
            }
        },
        REMOVE_FROM_TRASH_LIST(state, payload) {
            state.trashPickedList.find(item => {
                if (item.id === payload.id) {
                    item.count--
                    item.weight -= payload.weight
                    if (item.count === 0) {
                        state.trashPickedList.splice(state.trashPickedList.indexOf(item), 1)
                    }
                    return true
                }
            })
        }
    },
    actions: {
        addToTrashList(context, payload) {
            context.commit('ADD_TO_TRASH_LIST', payload)
        },
        removeFromTrashList(context, payload) {
            context.commit('REMOVE_FROM_TRASH_LIST', payload)
        }
    }
})

export default store