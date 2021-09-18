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
                <div @click="goHome()">
                    <router-link to="/" class="logo">上海交通大学</router-link>
                </div>
                <menu-list :items="routes" />
            </el-aside>

            <el-container class="sub_container">
                <el-header class="header">
                    <hamburger :is-active="opened" @toggleClick="toggleSideBar" />
                    <div>
                        <el-dropdown>
                            <i class="el-icon-setting" style="margin-right: 15px"></i>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="logout()">退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <span>{{ token }}</span>
                    </div>
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
import { homeRoutes } from '@/router/index'
import MenuList from '@/components/MenuList.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import { useRouter } from 'vue-router'
import { getToken, removeToken } from '@/utils/cookies'

export default defineComponent({
    name: 'App',
    components: { MenuList, Hamburger },
    setup: () => {
        const opened = ref(true)

        const router = useRouter()

        const toggleSideBar = () => {
            opened.value = !opened.value
        }

        const goHome = () => {
            router.push('/')
        }

        const token = ref(getToken())

        const logout = () => {
            removeToken()
            router.push('/login')
        }

        return {
            routes: homeRoutes,
            opened,
            toggleSideBar,
            goHome,
            token,
            logout
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
        justify-content: space-between;
        padding: 0 10px !important;
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
