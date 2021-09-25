import service from '@/utils/http'
import { ref } from 'vue'

type UseAxiosProps = {
    url: string
    method: 'post' | 'get' | 'put' | 'patch' | 'delete'
    params: Record<string, any> | null
}

const useAxios = async (props: UseAxiosProps) => {
    const result = ref(null)

    const r = await service(props)

    console.log(r)

    result.value = r.data.data

    console.log(result)

    return {
        result
    }
}

export default useAxios
