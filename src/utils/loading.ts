/* 全局loading */

import { ElLoading } from 'element-plus'

const loading = (title: string) => {
    const loadingInstance = ElLoading.service({ text: title })
    return loadingInstance
}

export default loading
