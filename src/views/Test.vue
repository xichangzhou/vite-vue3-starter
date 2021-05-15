<template>
    <button @click="goBack">goback</button>
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Test',
    computed: {
        username() {
            console.log(this.$route)
            return this.$route.params.id
        }
    },
    methods: {
        goBack() {
            // eslint-disable-next-line no-unused-expressions
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    },
    watch: {
        $route(to, from) {
            console.log(to)
            console.log(from)
        }
    }
})
</script>

<style lang="scss"></style>
