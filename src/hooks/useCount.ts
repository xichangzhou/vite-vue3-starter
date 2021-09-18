/* eslint-disable no-unused-vars */
import { ref, Ref, computed } from 'vue'

type CountResultProps = {
    count: Ref<number>
    multiple: Ref<number>
    increase: (delta?: number) => void
    decrease: (delta?: number) => void
}

const useCount = (initValue: number = 1): CountResultProps => {
    const count = ref(initValue)

    const increase = (delta?: number): void => {
        if (typeof delta !== 'undefined') {
            count.value += delta
        } else {
            count.value += 1
        }
    }

    const multiple = computed(() => count.value * 2)

    const decrease = (delta?: number): void => {
        if (typeof delta !== 'undefined') {
            count.value -= delta
        } else {
            count.value -= 1
        }
    }

    return {
        count,
        multiple,
        increase,
        decrease
    }
}

export default useCount
