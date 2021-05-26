<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-20 10:12:44
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 18:45:50
-->
<template>
    <div class="components-container board">
        <XDraggableKanban
            :key="1"
            :list="list1"
            :group="group"
            class="kanban todo"
            header-text="Todo"
        />
        <XDraggableKanban
            :key="2"
            :list="list2"
            :group="group"
            class="kanban working"
            header-text="Working"
        />
        <XDraggableKanban
            :key="3"
            :list="list3"
            :group="group"
            class="kanban done"
            header-text="Done"
        />
    </div>
    <ul id="items">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
    <ul id="items2">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
</template>

<script lang="ts">
import XDraggableKanban from '@/components/XDraggableKanban.vue'
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import Sortable from 'sortablejs'

export default defineComponent({
    name: 'XDraggableKanbanDemo',
    components: {
        XDraggableKanban
    },
    setup() {
        const dataMap = reactive({
            group: 'mission',
            list1: [
                { name: 'Mission', id: 1 },
                { name: 'Mission', id: 2 },
                { name: 'Mission', id: 3 },
                { name: 'Mission', id: 4 }
            ],
            list2: [
                { name: 'Mission', id: 5 },
                { name: 'Mission', id: 6 },
                { name: 'Mission', id: 7 }
            ],
            list3: [
                { name: 'Mission', id: 8 },
                { name: 'Mission', id: 9 },
                { name: 'Mission', id: 10 }
            ]
        })
        onMounted(() => {
            const el = document.getElementById('items')
            if (el) {
                Sortable.create(el, {
                    group: 'g'
                })
            }
            const el2 = document.getElementById('items2')
            if (el2) {
                Sortable.create(el2, {
                    group: 'g'
                })
            }
        })

        return { ...toRefs(dataMap) }
    }
})
</script>

<style lang="scss">
.kanban {
    &.todo {
        .board-column-header {
            background: #4a9ff9;
        }
    }
    &.working {
        .board-column-header {
            background: #f9944a;
        }
    }
    &.done {
        .board-column-header {
            background: #2ac06d;
        }
    }
}
</style>
<style lang="scss" scoped>
.board {
    width: 1000px;
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
}
</style>
