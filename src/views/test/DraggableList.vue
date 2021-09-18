<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-18 17:28:28
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 18:55:05
-->
<template>
    <div class="components-container">
        <aside>
            draggable-list base on
            <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">
                Vue.Draggable
            </a>
        </aside>
        <div class="editor-container">
            <x-draggable-list
                :list1="list1"
                :list2="list2"
                list1-title="List"
                list2-title="Article pool"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import XDraggableList from '@/components/XDraggableList.vue'
import faker from 'faker'

export default defineComponent({
    name: 'x-draggable-list-demo',
    components: {
        XDraggableList
    },
    setup() {
        const state = reactive({
            list1: [
                { id: 0, author: faker.name.findName(), title: faker.lorem.text() },
                { id: 1, author: '1', title: '0' },
                { id: 2, author: '0', title: '0' },
                { id: 3, author: '0', title: '0' },
                { id: 4, author: '0', title: '0' },
                { id: 5, author: '0', title: '0' }
            ],
            list2: [{ id: 6, author: faker.name.findName(), title: faker.lorem.text() }]
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>
