<template>
    <splitpanes class="default-theme" vertical style="height: 100vh">
        <pane size="20" min-size="15" max-size="25">
            <div style="padding: 30px"><span>Contextual Navigation</span></div>
        </pane>
        <pane size="80">
            <div style="padding: 30px">
                <span
                    ><Carousel :items-to-show="2.5" :wrap-around="true">
                        <Slide v-for="slide in 10" :key="slide">
                            <div class="carousel__item">{{ slide }}</div>
                        </Slide>

                        <template #addons>
                            <Navigation />
                        </template> </Carousel
                ></span>
            </div>
        </pane>
    </splitpanes>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
    setup() {}
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
