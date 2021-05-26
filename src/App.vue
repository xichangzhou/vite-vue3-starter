<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'App',
    setup: () => {
        console.log(getCurrentInstance()?.appContext.config.globalProperties.$faker.name.findName())
    }
})
</script>

<style lang="scss" scoped></style>
