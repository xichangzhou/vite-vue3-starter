import constant from '@/common/constant'
import Cookies from 'js-cookie'

export const getToken = () => Cookies.get(constant.TOKEN)
export const setToken = (token: string) => Cookies.set(constant.TOKEN, token)
export const removeToken = () => Cookies.remove(constant.TOKEN)

export const setCookie = (key: string, value: string) => Cookies.set(key, value)
export const getCookie = (key: string) => Cookies.get(key)
export const removeCookie = (key: string) => Cookies.remove(key)
