<template>
    <json-viewer :value="jsonData" copyable boxed sort />
    <v-chart class="chart" :option="option" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    ToolboxComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    ToolboxComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent
])

export default defineComponent({
    name: 'Test',
    components: {
        VChart
    },
    provide: {
        [THEME_KEY]: 'dark'
    },
    setup() {
        const obj = {
            name: 'qiu', // 字符串
            age: 18, // 数组
            isMan: false, // 布尔值
            date: new Date(),
            fn: () => {},
            arr: [1, 2, 5]
        }
        const jsonData = reactive(obj)

        const option = ref({
            title: {
                text: 'Traffic Sources',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
            },
            series: [
                {
                    name: 'Traffic Sources',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'Direct' },
                        { value: 310, name: 'Email' },
                        { value: 234, name: 'Ad Networks' },
                        { value: 135, name: 'Video Ads' },
                        { value: 1548, name: 'Search Engines' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })

        return { jsonData, option }
    }
})
</script>

<style lang="scss">
.chart {
    height: 400px;
    margin: 20px 0 0 0;
}
</style>
