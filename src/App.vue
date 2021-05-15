<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/axios">axios</router-link>
        |
        <router-link to="/vuex">vuex</router-link>

        |<router-link to="/test/jsonxcz">Test</router-link>
    </div>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    components: {}
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
