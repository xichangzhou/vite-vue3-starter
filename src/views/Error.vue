<template>
    <div>{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Error',
    setup() {
        return {
            msg: 'Error:404'
        }
    }
})
</script>

<style lang="scss"></style>
