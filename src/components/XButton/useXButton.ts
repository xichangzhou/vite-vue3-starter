import utils from '@/utils/utils'
import { toRefs, reactive } from 'vue'

const useXButton = ({
    type = 'default',
    plain = false,
    circle = false,
    size = 'normal',
    color = '#fe4444',
    titleColor = '#fff'
} = {}) => {
    const data = reactive({
        type,
        plain,
        circle,
        size,
        color,
        titleColor
    })

    const methodObj = {
        click() {
            utils.alertMsg('click')
        }
    }

    return {
        ...toRefs(data),
        ...methodObj
    }
}

export default useXButton
