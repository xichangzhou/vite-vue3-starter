<template>
    <div id="app">
        <el-container class="container">
            <el-aside
                :class="{
                    aside: true,
                    openSidebar: opened,
                    hideSidebar: !opened
                }"
            >
                <menu-list :items="routes" />
            </el-aside>

            <el-container class="sub_container">
                <el-header class="header">
                    <hamburger
                        id="hamburger-container"
                        class="hamburger-container"
                        :is-active="opened"
                        @toggleClick="toggleSideBar"
                    />
                    <router-view />
                </el-header>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { routes } from '@/router/index'
import MenuList from '@/components/MenuList.vue'
import Hamburger from '@/components/Hamburger/index.vue'

export default defineComponent({
    name: 'App',
    components: { MenuList, Hamburger },
    setup: () => {
        const opened = ref(true)

        const toggleSideBar = () => {
            opened.value = !opened.value
        }

        return {
            routes,
            opened,
            toggleSideBar
        }
    }
})
</script>

<style lang="scss" scoped>
body,
.aside,
.main,
.el-header {
    margin: 0 !important;
    padding: 0 !important;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.container {
    height: 100vh;
    display: flex;
    flex-direction: row;

    .aside {
        transition: width 0.28s;
        z-index: 9 !important;
    }
}

.sub_container {
    flex: 1;
    display: flex;
    flex-direction: column;

    .header {
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .main {
        flex: 1;
    }
}

.openSidebar {
    width: 200px !important;
}
.hideSidebar {
    width: 0px !important;
}
</style>
