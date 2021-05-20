import { https } from '@/utils/axios'
import { ref } from 'vue'

type UseAxiosProps = {
    url: string
    method: 'post' | 'get' | 'put' | 'patch' | 'delete'
    params: Record<string, any>
}

const useAxios = async (props: UseAxiosProps) => {
    const result = ref(null)

    result.value = await https(props)

    console.log(result)

    return {
        result
    }
}

export default useAxios
