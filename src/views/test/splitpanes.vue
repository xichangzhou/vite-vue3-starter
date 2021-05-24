<template>
    <splitpanes class="default-theme" vertical style="height: 100vh">
        <pane size="20" min-size="15" max-size="25">
            <div style="padding: 30px"><span>Contextual Navigation</span></div>
        </pane>
        <pane size="80">
            <div style="padding: 30px">
                <Carousel :items-to-show="2.5" :wrap-around="true">
                    <Slide v-for="slide in 10" :key="slide">
                        <div class="carousel__item">{{ slide }}</div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
                <vxe-table :data="tableData">
                    <vxe-column type="seq" title="Seq" width="60"></vxe-column>
                    <vxe-column field="name" title="Name"></vxe-column>
                    <vxe-column field="role" title="Role"></vxe-column>
                    <vxe-colgroup title="Group1">
                        <vxe-column field="sex" title="Sex"></vxe-column>
                        <vxe-column field="address" title="Address"></vxe-column>
                    </vxe-colgroup>
                </vxe-table>
            </div>
        </pane>
    </splitpanes>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default defineComponent({
    name: 'SplitPanes',
    components: {
        Splitpanes,
        Pane,
        Carousel,
        Slide,
        Navigation
    },
    setup() {
        const tableData = ref([
            { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'Shenzhen' },
            { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' }
        ])

        return { tableData }
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
