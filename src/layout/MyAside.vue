<template>
    <div class="main">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            @select="handleSelect"
            :router="routerOpen"
        >
            <template>
                <el-menu-item index="/"><div class="el-menu-title">jsonxcz</div></el-menu-item>
            </template>
            <template v-for="page in pages">
                <el-submenu :index="page.path" :key="page.path" v-if="page.subpages">
                    <template slot="title">
                        {{ page.title }}
                    </template>
                    <el-menu-item
                        v-for="subpage in page.subpages"
                        :key="subpage.path"
                        :index="subpage.path"
                        :class="{ hidden: subpage.hidden }"
                        >{{ subpage.title }}</el-menu-item
                    >
                </el-submenu>
                <el-menu-item :index="page.path" :key="page.path" v-else>{{
                    page.title
                }}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { pageList } from '@/router/pageList'

export default {
    name: '',
    components: {},
    data() {
        return {
            pages: pageList,
            routerOpen: true
        }
    },
    mounted() {
        console.log(pageList)
    },

    computed: {
        activeIndex() {
            console.log(this.$router)
            return this.$router.app._route.name
        }
    },
    methods: {
        handleSelect(index, indexPath) {
            console.log(index)
            console.log(indexPath)
            // this.$router.push()
        }
    }
}
</script>

<style scoped lang="scss">
.main {
    height: 100% !important;
    overflow: hidden;
}
.el-menu-demo {
    // width: 100px !important;
}
.el-menu-title {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
}

.hidden {
    display: none;
}
</style>
