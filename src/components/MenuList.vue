<template>
    <el-menu
        class="sidebar-el-menu"
        default-active=""
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
    >
        <!-- 遍历菜单 -->
        <template v-for="item in items">
            <!-- 含有子菜单 -->
            <template v-if="item.children">
                <!-- 第一层 含有子菜单菜单 -->
                <el-submenu :index="item.path" :key="item.path">
                    <template #title>{{ item.meta.title }}</template>
                    <menu-list :items="item.children" :fatherPath="item.path" />
                </el-submenu>
            </template>

            <!-- 第一层 不含子菜单  -->
            <template v-else>
                <el-menu-item
                    :index="fatherPath ? `${fatherPath}/${item.path}` : item.path"
                    :key="item.path"
                    v-if="item.path.length > 0 && item.name !== 'Error'"
                >
                    <span>{{ item.meta.title }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script>
export default {
    name: 'MenuList',
    props: {
        items: Array,
        fatherPath: String,
        isCollapse: Boolean
    },
    setup() {
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const handleClose = (key, keyPath) => {
            console.log(key, keyPath)
        }

        return {
            handleOpen,
            handleClose
        }
    }
}
</script>

<style></style>
