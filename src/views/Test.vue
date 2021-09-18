<template>
    <button @click="goBack">goback</button>
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
    name: 'Test',
    setup() {
        const router = useRouter()
        const route = useRoute()

        watchEffect(() => {
            console.log(route.params)
        })

        const goBack = () => {
            router.back()
        }

        return { goBack }
    }
})
</script>

<style lang="scss"></style>
