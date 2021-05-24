<template>
    <input v-model="title" />
    <button @click="updateTitle">更新标题</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useTitle from '@/hooks/useTitle'

export default defineComponent({
    name: 'Hooks',
    components: {},
    setup() {
        const setTitle = useTitle('title', true)
        const title = ref('title')
        const updateTitle = () => {
            setTitle(title.value)
        }
        return {
            title,
            updateTitle
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
</style>
