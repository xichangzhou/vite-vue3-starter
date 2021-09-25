import Axios from 'axios'
import { ElMessage } from 'element-plus'

// const baseURL = 'https://api.github.com'

const axios = Axios.create({
    // baseURL,
    timeout: 20000, // 请求超时 20s
    method: 'get',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // 参数
    data: {},
    // 携带凭证
    withCredentials: true,
    // 返回数据类型
    responseType: 'json'
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (config) => {
        /**
         * 根据你的项目实际情况来对 config 做处理
         * 这里对 config 不做任何处理，直接返回
         */
        const resetConfig = config
        const { headers = {} } = resetConfig
        resetConfig.headers = headers
        resetConfig.headers = Object.assign(
            config.method === 'get'
                ? {
                      Accept: 'application/json',
                      'Content-Type': 'application/json; charset=UTF-8'
                  }
                : {
                      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  },
            resetConfig.headers
        )
        resetConfig.headers.token = sessionStorage.getItem('token') || ''
        return resetConfig
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            if (response.data.code === 200) {
                return Promise.resolve(response.data.data)
            }
            if (response.data.code === '1000' || response.data.code === 1000) {
                window.location.href = '/login'
                return Promise.reject(response.data.msg)
            }
            // antd的message组件提示
            return Promise.reject(response.data.msg)
        }
        return Promise.reject(response.data.msg)
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            ElMessage.error(`Code: ${code}, Message: ${msg}`)
            console.error(`[Axios Error]`, error.response)
        } else {
            ElMessage.error(`${error}`)
        }
        return Promise.reject(error)
    }
)

export const https = async (option: { [key: string]: any } = {}) => {
    console.log(option)

    let result = null
    if (option.method === 'get' || option.method === 'delete') {
        // 处理get、delete请求
        result = await (axios as any)[option.method](option.url, { params: option.params })
    } else if (option.method === 'post' || option.method === 'put') {
        // 处理post、put请求
        result = await (axios as any)[option.method](option.url, option.params)
    }

    console.log(result)

    return result
}

export default axios
