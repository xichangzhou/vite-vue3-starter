<template>
    <el-row>
        <el-col :span="7"
            ><h1>axios</h1>
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
            </Suspense></el-col
        >
        <!--商品展示-->
        <el-col :span="17">
            <el-button type="primary" @click="pushAxios">go back</el-button>
            <h1>{{ state.counter }}</h1>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import axios from '@/utils/axios'
import useUrlAxios from '@/hooks/useUrlAxios'
import { nowTime } from '@/hooks/useNowTime'
import AsyncShow from '@/components/AsyncShow.vue'
import router from '@/router'
import { useGlobalState } from '@/utils/globalState'

export default defineComponent({
    name: 'HelloWorld',
    props: {},
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

        const pushAxios = () => {
            router.back()
            console.log(router)
        }

        return { count, double, loading, loaded, nowTime, pushAxios, ...(useGlobalState() as {}) }
    }
})
</script>

<style scoped lang="scss">
h1 {
    background-color: rebeccapurple;
}
</style>
