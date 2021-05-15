<template>
    <h1>axios</h1>
    <div>{{ nowTime }}</div>
    <div v-if="loading">Loading.....</div>
    <textarea v-if="loaded" :value="double" contenteditable="false" />
    <Suspense>
        <template #default>
            <AsyncShow />
        </template>
        <template #fallback>
            <h1>...Loading...</h1>
        </template>
    </Suspense>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import axios from '@/utils/axios'
import useUrlAxios from '@/hooks/useUrlAxios'
import { nowTime } from '@/hooks/useNowTime'
import AsyncShow from '@/components/AsyncShow.vue'

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    components: {
        AsyncShow
    },
    setup: () => {
        const count = ref(0)
        axios
            .get('https://api.github.com/users/xPoet')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        const { result, loading, loaded } = useUrlAxios(
            'https://v2.jinrishici.com/one.json?client=npm-sdk/1.0'
        )

        const double = computed(() => {
            return JSON.stringify(result, null, 4)
        })

        return { count, double, loading, loaded, nowTime }
    }
})
</script>

<style scoped lang="scss">
h1 {
    background-color: rebeccapurple;
}
</style>
