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
                <div @click="goHome()"><router-link to="/" class="logo">jsonxcz</router-link></div>
                <menu-list :items="routes" />
            </el-aside>

            <el-container class="sub_container">
                <el-header class="header">
                    <hamburger :is-active="opened" @toggleClick="toggleSideBar" />
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { routes } from '@/router/index'
import MenuList from '@/components/MenuList.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'App',
    components: { MenuList, Hamburger },
    setup: () => {
        const opened = ref(true)

        const toggleSideBar = () => {
            opened.value = !opened.value
        }

        const goHome = () => {
            useRouter().push('/')
        }

        return {
            routes,
            opened,
            toggleSideBar,
            goHome
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    display: flex;
    flex-direction: row;
}

.sub_container {
    flex: 1;
    display: flex;
    flex-direction: column;

    .header {
        height: 60px !important;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .main {
        flex: 1;
    }
}

.logo {
    height: 60px !important;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
