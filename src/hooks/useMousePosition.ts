import { onBeforeUnmount, onMounted, ref } from 'vue'

export default () => {
    const x = ref(-1) // x 绑定为响应式数据
    const y = ref(-1)
    const clickHandler = (event: MouseEvent) => {
        x.value = event.pageX
        y.value = event.pageY
    }
    onMounted(() => {
        window.addEventListener('click', clickHandler)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', clickHandler)
    })
    return {
        x,
        y
    }
}
