<template>
<section class="trashList__container row row--center">
    <div class="trashList__block">
        <div class="trashList__block-header">
            <h4>{{ title }}</h4>
        </div>
        <div class="flex trashList__filters">
            <input class="trashList__input" type="text" placeholder="Trouver votre déchet" v-model="trashItemInput">
            <div class="form-group">
                <select class="form-control" id="filter" v-model="selected">
                    <option disabled value="">Choisissez une catégorie</option>
                    <option
                        v-for="(category, index) in categories"
                        :value="category"
                        :key="index"
                    >
                    {{ category }}
                    </option>
                </select>
            </div>
        </div>
    </div>
    <div class="trashList__card-list row row--space-evenly">
        <span v-if="trashList.length === 0">Aucun déchet n'a été trouvé</span>
        <div
            class="trashList__card"
            v-for="(item, index) in trashListArr"
            :key="index"
            @click="chooseItem(item)"
        >
            <img class="trashList__card-img" :src="item.image" alt="">
            <h4 class="trashList__card-name">
                {{ item.name }}
            </h4>
        </div>
    </div>
</section>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: "ListComponent",
    props: {
        trashList: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const selected = ref('')
        const trashItemInput = ref("")
        const trashListArr = computed(() => {
            return props.trashList.filter(trash => {
                if (trashItemInput.value && selected.value) {
                    return trash.name.toLowerCase().includes(trashItemInput.value.toLowerCase()) && trash.category.toLowerCase().includes(selected.value.toLowerCase())
                } else if (trashItemInput.value) {
                    return trash.name.toLowerCase().includes(trashItemInput.value.toLowerCase())
                } else if (selected.value) {
                    return trash.category.toLowerCase().includes(selected.value.toLowerCase())
                } else {
                    return trash
                }
            })
        })

        const categoriesArr = props.trashList.map(item => item.category)
        const categories =  [...new Set(categoriesArr)]

        const router = useRouter()
        function chooseItem (item) {
            const name = item.name.replace(/ /g, "-").toLowerCase()
            router.push(`/dechets/${name}`)
        }   
        return {
            trashItemInput,
            trashListArr,
            categories,
            selected,
            chooseItem
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
            border: 1px solid #ccc;
            width: 150px;
            margin-bottom: 20px;
            padding: 5px;
            cursor: pointer;

            @include for-tablet-portrait-up {
                width: 200px;
            }

            &-list {
                padding: 0 15px;

                @include for-tablet-portrait-up {
                    padding: 0 50px;
                }
            }

            &-img {
                width: 100px;
                height: 100px;
            }
        }
    }
</style>