<template>
    <button
        :class="[
            // 此步为重要的步骤，主要是控制class来控制显示不同的按钮样式
            type ? 'ice-button--' + type : '',
            'button_init',
            size ? `button_init_${size}` : '',
            {
                'is-plain': plain,
                'is-circle': circle
            }
        ]"
        :style="`
            --color-tint: ${color};
            --color-title: ${titleColor}
        `"
        @click="click"
    >
        <span v-if="$slots.default" class="color"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'XButton',
    props: {
        type: {
            type: String
        },
        size: {
            type: String
        },
        color: {
            type: String,
            default: '#2d8cf0'
        },
        titleColor: {
            type: String,
            default: '##17233d'
        },
        // 是否为背景白色，边框和字体同颜色的简朴按钮
        plain: Boolean,
        // 是否为圆角按钮（在这里我是做了圆角处理不是完全圆）
        circle: Boolean
    },
    setup(props, ctx) {
        const mehthodObj = {
            click() {
                ctx.emit('click')
            }
        }
        return {
            ...mehthodObj
        }
    }
}
</script>
<style lang="scss" scoped>
.button_init {
    outline: none;
    user-select: none;
    border: none;
    position: relative;
    color: var(--color-title, #173d22) !important;
    background-color: var(--color-tint, #2d8cf0) !important;
    color: $color !important;
}

.button_init_mini {
    height: 20px;
    font-size: 12px;
}

.button_init_small {
    height: 32px;
    font-size: 14px;
}

.button_init_normal {
    height: 64px;
    font-size: 18px;
}

.button_init:active::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 5%);
}
/* 普通按钮 */
.ice-button--normal {
    background: #474747;
    border: 1px solid #474747;
    color: #ffffff;
}
.ice-button--normal.is-plain {
    background: #fff;
    border: 1px solid #474747;
    color: #474747;
}
.ice-button--normal.is-plain.is-circle {
    background: #fff;
    border: 1px solid #474747;
    color: #474747;
    border-radius: 10px;
}
.ice-button--normal.is-circle {
    background: #474747;
    border: 1px solid #474747;
    color: #ffffff;
    border-radius: 10px;
}
/* 默认按钮 */
.ice-button--default {
    background: #1989fa;
    border: 1px solid #1989fa;
    color: #ffffff;
}
.ice-button--default.is-plain {
    background: #fff;
    border: 1px solid #1989fa;
    color: #1989fa;
}
.ice-button--default.is-plain.is-circle {
    background: #fff;
    border: 1px solid #1989fa;
    color: #1989fa;
    border-radius: 10px;
}
.ice-button--default.is-circle {
    background: #1989fa;
    border: 1px solid #1989fa;
    color: #ffffff;
    border-radius: 10px;
}
/* 警告按钮 */
.ice-button--error {
    background: #eb2f06;
    border: 1px solid #eb2f06;
    color: #ffffff;
}
.ice-button--error.is-plain {
    background: #fff;
    border: 1px solid #eb2f06;
    color: #eb2f06;
}
.ice-button--error.is-plain.is-circle {
    background: #fff;
    border: 1px solid #eb2f06;
    color: #eb2f06;
    border-radius: 10px;
}
.ice-button--error.is-circle {
    background: #eb2f06;
    border: 1px solid #eb2f06;
    color: #ffffff;
    border-radius: 10px;
}
/* 主要按钮 */
.ice-button--success {
    background: #2ecc71;
    border: 1px solid #2ecc71;
    color: #ffffff;
}
.ice-button--success.is-plain {
    background: #fff;
    border: 1px solid #2ecc71;
    color: #2ecc71;
}
.ice-button--success.is-plain.is-circle {
    background: #fff;
    border: 1px solid #2ecc71;
    color: #2ecc71;
    border-radius: 10px;
}
.ice-button--success.is-circle {
    background: #2ecc71;
    border: 1px solid #2ecc71;
    color: #ffffff;
    border-radius: 10px;
}
/* 警告按钮 */
.ice-button--warning {
    background: #f39c12;
    border: 1px solid #f39c12;
    color: #ffffff;
}
.ice-button--warning.is-plain {
    background: #fff;
    border: 1px solid #f39c12;
    color: #f39c12;
}
.ice-button--warning.is-plain.is-circle {
    background: #fff;
    border: 1px solid #f39c12;
    color: #f39c12;
    border-radius: 10px;
}
.ice-button--warning.is-circle {
    background: #f39c12;
    border: 1px solid #f39c12;
    color: #ffffff;
    border-radius: 10px;
}
</style>
