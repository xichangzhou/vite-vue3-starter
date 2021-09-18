/*
 * @Description:全局存储类封装（AES加解密）
 * @Autor: ZY
 * @Date: 2020-11-04 11:51:01
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 16:57:57
 */

import Cookies from 'js-cookie'
import constant from '@/common/constant'
import { encrypt, decrypt } from './ase'

/**
 * @description: 本地保存数据AES加密处理
 * @param {StorageType} type localStorage 和 sessionStorage 选择
 * @param {string} key
 * @param {T} value
 * @return {*}
 */
const setItem = (type: String = constant.LOCALSTORAGE, key: string, value: any) => {
    const valueJson = JSON.stringify(value)
    const valueAes = encrypt(valueJson) as string
    if (type === constant.LOCALSTORAGE) {
        localStorage.setItem(key, valueAes)
    } else if (type === constant.SESSIONSTORAGE) {
        sessionStorage.setItem(key, valueAes)
    } else {
        Cookies.set(key, valueAes)
    }
}

const getItem = (type: String = constant.LOCALSTORAGE, key: string): any => {
    if (type === constant.LOCALSTORAGE) {
        return decrypt(localStorage.getItem(key))
    }
    if (type === constant.SESSIONSTORAGE) {
        return decrypt(sessionStorage.getItem(key))
    }
    return decrypt(Cookies.get(key) ?? '')
}

const removeItem = (type: String = constant.LOCALSTORAGE, key: string) => {
    if (type === constant.LOCALSTORAGE) {
        localStorage.removeItem(key)
    } else if (type === constant.SESSIONSTORAGE) {
        sessionStorage.removeItem(key)
    } else {
        Cookies.remove(key)
    }
}

export default {
    setItem,
    getItem,
    removeItem
}
