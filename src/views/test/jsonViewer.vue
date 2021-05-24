<template>
    <json-viewer :value="jsonData" copyable boxed sort />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'Test',
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

        return { jsonData }
    }
})
</script>

<style lang="scss"></style>
