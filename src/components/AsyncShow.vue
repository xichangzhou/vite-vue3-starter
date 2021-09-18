<template>
    <img :src="result && result.imgUrl" />
</template>

<script lang="ts">
// defineComponent是用来解决TypeScript情况下，
// 传统的Vue.extends无法对组件给出正确的参数类型推断的。
// 也就是说在TypeScript环境中如果参数类型推断不正常时，
// 用defineComponent()组件来进行包装函数。
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    async setup() {
        const rawData = await axios.get('https://apiblog.jspang.com/default/getGirl')
        return { result: rawData.data }
    }
})
</script>
