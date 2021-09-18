<template>
    <div class="modal-backdrop" v-if="modalShow">
        <div class="modal">
            <div class="modal-header">
                <div>
                    <h3>{{ title }}</h3>
                </div>
                <div>
                    <span
                        class="close-img iconfont icon-baseline-close-px"
                        @click="confirmModal(false)"
                    />
                </div>
            </div>
            <div class="modal-body">
                <slot />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-close" @click="confirmModal(false)">关闭</button>
                <button type="button" class="btn-confirm" @click="confirmModal(true)">确认</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.close-img {
    margin: 12px 10px 0 0;
    cursor: pointer;
}

@font-face {
    font-family: 'iconfont'; /* Project id 2467174 */
    src: url('//at.alicdn.com/t/font_2467174_e10m71s3oxa.woff2?t=1621410488947') format('woff2'),
        url('//at.alicdn.com/t/font_2467174_e10m71s3oxa.woff?t=1621410488947') format('woff'),
        url('//at.alicdn.com/t/font_2467174_e10m71s3oxa.ttf?t=1621410488947') format('truetype');
}

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 28px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-baseline-close-px:before {
    content: '\e615';
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
}
.modal {
    background-color: #fff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    width: 700px;
    box-sizing: border-box;
}
.modal-header {
    border-bottom: 1px solid #eee;
    color: #313131;
    justify-content: space-between;
    padding-left: 15px;
    display: flex;
}
.modal-footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
    padding: 15px;
    display: flex;
}
.modal-body {
    position: relative;
    padding: 20px 10px;
}
.btn-close,
.btn-confirm {
    border-radius: 8px;
    margin-left: 16px;
    width: 56px;
    height: 36px;
    border: none;
    cursor: pointer;
}
.btn-close {
    color: #313131;
    background-color: transparent;
}
.btn-confirm {
    color: #fff;
    background-color: #2d8cf0;
}
</style>

<script lang="ts">
// 引入路由
import { reactive, toRefs } from 'vue'

export default {
    name: 'modal',
    props: {
        modalShow: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: '提示'
        }
    },
    // VUE3语法 setup函数
    // setup官方文档：https://www.vue3js.cn/docs/zh/guide/composition-api-setup.html#参数
    setup(props: any, content: any) {
        /**
         * @name: 声明data
         * @author: camellia
         * @email: guanchao_gc@qq.com
         * @date: 2021-01-10
         */
        const data = reactive({
            // 菜单显示标识
            modalShow: props.modalShow
        })

        /**
         * @name: 点击确定/关闭按钮（父组件监听点击）
         * @author: camellia
         * @email: guanchao_gc@qq.com
         * @date: 2021-01-26
         */
        const confirmModal = (sign: boolean) => {
            // 子组件向父组件传值
            content.emit('confirmModal', sign)
        }

        /**
         * @name: 将data绑定值dataRef
         * @author: camellia
         * @email: guanchao_gc@qq.com
         * @date: 2021-01-10
         */
        const dataRef = toRefs(data)
        return {
            confirmModal,
            ...dataRef
        }
    }
}
</script>
