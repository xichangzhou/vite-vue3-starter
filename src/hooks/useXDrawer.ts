import { toRefs, reactive } from 'vue'

const useXDrawer = (drawerShow = false) => {
    const data = reactive({
        drawerShow
    })

    const closeDrawer = () => {
        data.drawerShow = false
    }

    const openDrawer = () => {
        data.drawerShow = true
    }

    return {
        closeDrawer,
        openDrawer,
        ...toRefs(data)
    }
}

export default useXDrawer
