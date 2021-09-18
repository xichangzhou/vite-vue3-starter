/*
 * @Description:AES加密
 * @Autor: ZY
 * @Date: 2020-11-04 13:33:44
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 16:50:17
 */
import { AES, mode, pad, enc } from 'crypto-ts'
import constant from '@/common/constant'

export const encrypt = (text: string | null): string | null => {
    return AES.encrypt(text ?? '', constant.ASE, {
        mode: mode.ECB,
        padding: pad.PKCS7
    }).toString()
}

export const decrypt = (text: string | null): string | null => {
    return AES.decrypt(text ?? '', constant.ASE, {
        mode: mode.ECB,
        padding: pad.PKCS7
    }).toString(enc.Utf8)
}
