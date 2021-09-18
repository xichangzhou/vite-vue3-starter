<template>
    <input v-model="title" />
    <button @click="updateTitle">更新标题</button>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
    <div class="list-container">
        <XVirtualList :data="dataSource">
            <template v-slot="{ item, index }">
                <div class="item-container">
                    <div class="cell cell-index">{{ index + 1 }}</div>
                    <div class="cell">{{ item.name }}</div>
                    <div class="cell">{{ item.email }}</div>
                    <div class="cell">{{ item.address }}</div>
                </div>
            </template>
        </XVirtualList>
        <div>
            <p>Try pressing the following:</p>

            <div style="display: flex; flex-wrap: wrap">
                <span
                    v-for="keyName of [...filterKey]"
                    :key="keyName"
                    :style="{
                        padding: '4px 20px',
                        margin: '8px',
                        borderRadius: '2px',
                        background:
                            lastPressedKey === keyName
                                ? 'rgba(62, 175, 124, 0.6)'
                                : 'rgb(238, 238, 238)'
                    }"
                >
                    {{ keyName }}
                </span>
            </div>

            <p style="margin-left: 8px">
                lastPressedKey:
                <span style="color: #f00; font-size: 16px">{{ lastPressedKey }}</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useTitle from '@/hooks/useTitle'
import XVirtualList from '@/components/XVirtualList.vue'
import { useKeyPress } from 'ahooks-vue'

export default defineComponent({
    name: 'Hooks',
    components: { XVirtualList },
    setup() {
        const setTitle = useTitle('title', true)
        const title = ref('title')
        const updateTitle = () => {
            setTitle(title.value)
        }
        const text = ref('')

        const lastPressedKey = ref('')

        function setState(key: string) {
            lastPressedKey.value = key
        }

        // a s Backspace 0 1
        const filterKey = [
            'a',
            's',
            'Enter',
            '0',
            '1',
            'shift.c',
            'meta',
            'ctrl.alt.c',
            'ctrl.alt.space',
            'ctrl.alt.0'
        ]

        useKeyPress(filterKey, (event) => {
            setState(event.key)
        })

        return {
            title,
            updateTitle,
            text,
            dataSource: [
                { name: '1', email: 'a', address: 'a' },
                { name: '1', email: 'a', address: 'a' },
                { name: '1', email: 'a', address: 'a' },
                { name: '1', email: 'a', address: 'a' },
                { name: '1', email: 'a', address: 'a' }
            ],
            lastPressedKey,
            filterKey
        }
    }
})
</script>

<style lang="scss">
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--carousel-color-primary);
    color: var(--carousel-color-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.list-container {
    width: 100%;
    height: 600px;
    border: 2px solid #4caf50;
    margin: 20px auto;
}
.item-container {
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.cell {
    margin: 0 8px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    white-space: nowrap;
    &.cell-index {
        flex: none;
        min-width: 60px;
    }
}
</style>
