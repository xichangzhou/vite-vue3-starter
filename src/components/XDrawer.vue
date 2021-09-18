<template>
    <div class="drawer">
        <!-- 遮罩层 -->
        <div class="mask-show" v-if="drawerShow" @click="close()"></div>
        <!-- 抽屉层 -->
        <div class="setbox" :class="{ show: drawerShow }">
            <div class="header">
                <p class="fl">即时聊天</p>
                <button class="off" @click="close()">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'

export default {
    name: 'Drawer',
    props: {
        drawerShow: Boolean
    },
    setup(props, content) {
        const data = reactive({
            drawerShow: props.drawerShow
        })

        const close = () => {
            content.emit('closeDrawer')
        }

        return {
            close,
            ...toRefs(data)
        }
    }
}
</script>
<style lang="scss" scoped>
.drawer {
    // height: 500px;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    /* 遮罩 */
    .mask-show {
        position: fixed;
        z-index: 100;
        top: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .setbox {
        position: fixed;
        z-index: 1100;
        top: 0px;
        bottom: 0px;
        width: 30%;
        height: 100%;
        background: #ffffff;
        border-left: 1px solid #cfd8dc !important;
        box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.12);
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
        // 动画（定位从 -32% 变成 0）
        right: -32%;
        padding: 0px 0px 0px 20px;
    }
    // 动画
    .show {
        right: 0;
    }
}
</style>
