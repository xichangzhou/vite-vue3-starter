<template>
    <div class="x_wrap">
        <input class="x_input" type="button" v-show="isDisabled" />
        <div
            class="x_checkbox"
            :class="{ x_checkbox_disabled: isDisabled }"
            @click="checkboxChange"
        >
            <i :class="['x_icon iconfont icon-duihao', isTouch ? 'x_icon_in' : 'x_icon_out']"></i>
            <span class="x_span">复选框</span>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

/**
 * 自定义复选框
 */
export default {
    name: 'XCheckBox',
    props: {
        disabled: Boolean
    },
    setup(props) {
        const isDisabled = ref(false)

        isDisabled.value = props.disabled

        const isTouch = ref(false)

        const methodObj = {
            checkboxChange() {
                isTouch.value = !isTouch.value
            }
        }

        return { ...methodObj, isTouch, isDisabled }
    }
}
</script>

<style scoped lang="scss">
.x_wrap {
    width: 120px;
    height: 50px;
    position: relative;
    margin: 0 auto;
}

.x_input {
    position: absolute;
    width: 120px;
    height: 50px;
    top: 0;
    left: 0;
    z-index: 9;
    border: none;
    opacity: 0;
    cursor: no-drop;
}

.x_checkbox {
    width: 120px;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.x_checkbox .x_icon {
    background-color: rebeccapurple;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid #666;
}

.x_checkbox .x_icon_in {
    background-color: #1519bc;
}

.x_checkbox .x_icon_out {
    background-color: #fff;
}

.x_span {
    margin: 0 0 0 5px;
    user-select: none;
    font-size: 18px;
}

// 警用
.x_checkbox_disabled .x_icon {
    background-color: #c1c1c1;
    border: 1px solid #c1c1c1;
}

.x_checkbox_disabled .x_span {
    color: #c1c1c1;
}

@font-face {
    font-family: 'iconfont'; /* Project id 2467174 */
    src: url('//at.alicdn.com/t/font_2467174_fvb77ylswj6.woff2?t=1621405918246') format('woff2'),
        url('//at.alicdn.com/t/font_2467174_fvb77ylswj6.woff?t=1621405918246') format('woff'),
        url('//at.alicdn.com/t/font_2467174_fvb77ylswj6.ttf?t=1621405918246') format('truetype');
}

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 18px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    line-height: 18px;
}

.icon-duihao:before {
    content: '\e605';
}
</style>
