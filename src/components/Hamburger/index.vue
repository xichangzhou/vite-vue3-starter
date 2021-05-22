<template>
    <div @click="toggleClick">
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
.hamburger {
    font-size: 20px;
}
</style>
