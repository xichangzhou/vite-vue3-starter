import { ref, watchEffect } from 'vue'
import { tryOnUnmounted } from './util'

const useTitle = (title: string, restoreOnUnMount = false) => {
    const cache = document.title
    const titleRef = ref(title)
    watchEffect(() => {
        document.title = titleRef.value
    })
    if (restoreOnUnMount) {
        tryOnUnmounted(() => {
            document.title = cache
        })
    }
    const setTitle = (newTitle: string) => {
        titleRef.value = newTitle
    }
    return setTitle
}

export default useTitle
