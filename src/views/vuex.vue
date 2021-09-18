<template>
    <h1>vue</h1>
    <h1>{{ state.counter }}</h1>
    <el-button type="primary" @click="increment">add</el-button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useGlobalState } from '@/utils/globalState'

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup: () => {
        const count = ref(0)
        return { count, ...(useGlobalState() as {}) }
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
