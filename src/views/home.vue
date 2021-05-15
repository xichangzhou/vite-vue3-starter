<template>
    <el-row>
        <el-col :span="7"><h1>home</h1></el-col>
        <!--商品展示-->
        <el-col :span="17">
            <el-button type="primary" @click="pushAxios">go axios</el-button>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import router from '@/router'

export default defineComponent({
    name: 'HelloWorld',
    props: {},
    setup: () => {
        const count = ref(0)
        const pushAxios = () => {
            router.push('/axios')
        }
        return { count, pushAxios }
    }
})
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
