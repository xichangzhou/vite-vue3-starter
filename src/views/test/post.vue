<template>
    <div>Post</div>
    <el-button type="primary" @click="go()">go test</el-button>
    <el-button type="primary" @click="replace()">replace test</el-button>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()

        const go = () => {
            router.push('/test/jsonxcz')
        }
        const replace = () => {
            router.replace('/test/jsonxcz')
        }

        return {
            go,
            replace
        }
    }
}
</script>

<style></style>
