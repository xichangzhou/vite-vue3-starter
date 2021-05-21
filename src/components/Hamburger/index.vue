<template>
    <div style="padding: 0 15px" @click="toggleClick">
        <i class="el-icon-s-fold hamburger" v-if="isActive"></i>
        <i class="el-icon-s-unfold hamburger" v-else></i>
    </div>
</template>

<script>
export default {
    name: 'Hamburger',
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    },
    setup(props, ctx) {
        const toggleClick = () => {
            ctx.emit('toggleClick')
        }

        return { toggleClick }
    }
}
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
    color: #2c3e50;
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
