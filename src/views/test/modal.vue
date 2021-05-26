<template>
    <button type="button" class="btn btn-danger" @click="open">删除</button>
    <modal
        title="删除文章"
        :visible="modalIsVisible"
        @modal-on-close="hideAndDelete"
        @modal-on-confirm="hideAndDelete"
    >
        <p>确定要删除这篇文章吗？</p>
    </modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modal from '@/components/Modal.vue'

export default defineComponent({
    name: 'Modalsss',
    components: {
        Modal
    },
    setup() {
        const modalIsVisible = ref(false)

        const hideAndDelete = () => {
            modalIsVisible.value = false
        }
        const open = () => {
            console.log('------------')

            modalIsVisible.value = true
        }

        return { modalIsVisible, hideAndDelete, open }
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
