<template>
    <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent, inject, watchEffect, ref, watch, reactive } from 'vue'

export default defineComponent({
    name: 'Child',
    props: {},
    setup: () => {
        const title = inject('title')

        const state = ref(0)

        watch(state, (newValue, oldValue) => {
            console.log(`原值为${oldValue}`)
            console.log(`新值为${newValue}`)
            /* 1秒后打印结果：
                  原值为0
                  新值为1
          */
        })

        // 1秒后将state值+1
        setTimeout(() => {
            state.value += 1
        }, 1000)

        const state1 = reactive({ count: 0 })

        watch(
            () => state1.count,
            (newValue, oldValue) => {
                console.log(`原值为${oldValue}`)
                console.log(`新值为${newValue}`)
                /* 1秒后打印结果：
                  原值为0
                  新值为1
          */
            }
        )

        // 1秒后将state.count的值+1
        setTimeout(() => {
            state1.count += 1
        }, 1000)

        /**
 * watchEffect 它与 watch 的区别主要有以下几点：

不需要手动传入依赖
每次初始化时会执行一次回调函数来自动获取依赖
无法获取到原值，只能得到变化后的值
 */
        const state2 = reactive({ count: 0, name: 'zs' })

        watchEffect(() => {
            console.log(state2.count)
            console.log(state2.name)
            /*  初始化时打印：
                  0
                  zs

            1秒后打印：
                  1
                  ls
          */
        })

        setTimeout(() => {
            state2.count += 1
            state2.name = 'ls'
        }, 1000)

        watchEffect(() => {
            console.log('主题被修改')
        })

        return { title }
    }
})
</script>

<style scoped lang="scss">
h1 {
    background-color: rgb(113, 98, 128);
}
</style>
