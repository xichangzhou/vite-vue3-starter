<template>
    <el-container style="height: 100%">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: 100%">
            <menu-list :items="routes" />
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>

            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>

    <!-- <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { routes } from '@/router/index'
import MenuList from '@/components/MenuList.vue'

export default defineComponent({
    name: 'App',
    components: { MenuList },
    setup: () => {
        return {
            routes
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
