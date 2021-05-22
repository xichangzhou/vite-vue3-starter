<template>
    <el-button type="primary" @click="login()">login</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { setToken } from '@/utils/cookies'

export default defineComponent({
    name: 'Login',
    setup() {
        const router = useRouter()

        const login = () => {
            setToken('jsonxcz')
            router.push('/')
        }

        return { login }
    }
})
</script>

<style lang="scss"></style>
