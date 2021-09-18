import { toRefs, reactive } from 'vue'

const useXModal = (modalShow = false, modalTitle = '弹框') => {
    const data = reactive({
        modalShow,
        modalTitle,
        email: '',
        loginSign: false
    })

    const confirmModal = (sign: boolean) => {
        // 关闭模态框
        data.modalShow = false
        if (sign) {
            console.log(data)
        } else {
            const { email } = data
            console.log(email)

            // 编写你想做的操作
        }
    }

    const openModal = () => {
        data.modalShow = true
    }

    return {
        confirmModal,
        openModal,
        ...toRefs(data)
    }
}

export default useXModal
