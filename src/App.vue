<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/axios">axios</router-link>
        |
        <router-link to="/vuex">vuex</router-link>

        |<router-link to="/test/jsonxcz">Test</router-link>
    </div>

    <el-container style="height: 100%">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template #title><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                        <template #title>分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template #title>选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template #title><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item-group>
                        <template #title>分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template #title>选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template #title><i class="el-icon-setting"></i>导航三</template>
                    <el-menu-item-group>
                        <template #title>分组一</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                        <template #title>选项4</template>
                        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
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

export default defineComponent({
    name: 'App',
    components: {},
    setup: () => {}
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
