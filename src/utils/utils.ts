/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

/**
 * 自定义公共函数
 */
const utils = {
    /**
     * @name: 自定义alert(确定，取消)
     * @author: camellia
     * @email: guanchao_gc@qq.com
     * @date: 2021-01-23
     * @param:  data    string  显示的文字
     * @param:  callbackTure    function    点击确定回调函数
     * @param:  callbackFalse   function    点击取消回调函数
     */
    alert(data: any, callbackTrue: any = '', callbackFalse: any = '') {
        const alertBg = document.createElement('div')
        const alertBox = document.createElement('div')
        const alertText = document.createElement('div')
        const alertBtnTrue = document.createElement('div')
        const alertBtnFalse = document.createElement('div')
        const textNode = document.createTextNode(data || '')
        const btnTextFalse = document.createTextNode('取 消')
        const btnTextTrue = document.createTextNode('确 定')
        // 控制背景样式
        utils.setCss(alertBg, {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            'background-color': 'rgba(0, 0, 0, 0.1)',
            'z-index': '999999999'
        })
        // 控制 提示框样式
        utils.setCss(alertBox, {
            width: '350px',
            'max-width': '90%',
            'font-size': '18px',
            'text-align': 'center',
            'background-color': '#fff',
            'border-radius': '15px',
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        })
        // 控制提示字体样式
        utils.setCss(alertText, {
            padding: '32px 15px',
            'border-bottom': '1px solid #ddd'
        })
        // 控制确定按钮样式
        utils.setCss(alertBtnTrue, {
            padding: '10px 0',
            color: '#007aff',
            'font-weight': '600',
            cursor: 'pointer',
            float: 'right',
            'text-align': 'center',
            width: '49%'
        })
        // 控制取消按钮样式
        utils.setCss(alertBtnFalse, {
            padding: '10px 0',
            color: '#007aff',
            'font-weight': '600',
            cursor: 'pointer',
            float: 'right',
            'text-align': 'center',
            width: '50%',
            'border-right': '1px solid #CCC'
        })
        // 内部结构套入
        alertText.appendChild(textNode)
        alertBtnTrue.appendChild(btnTextTrue)
        alertBtnFalse.appendChild(btnTextFalse)
        alertBox.appendChild(alertText)
        alertBox.appendChild(alertBtnTrue)
        alertBox.appendChild(alertBtnFalse)
        alertBg.appendChild(alertBox)
        // 整体显示到页面内
        document.getElementsByTagName('body')[0].appendChild(alertBg)
        // 确定按钮绑定点击事件
        alertBtnTrue.onclick = () => {
            // alert_bg.parentNode.removeChild(alert_bg);
            if (typeof callbackTrue === 'function') {
                callbackTrue() // 回调
            }
            utils.setCss(alertBg, {
                display: 'none'
            })
        }
        // 取消按钮绑定点击事件
        alertBtnFalse.onclick = () => {
            if (typeof callbackFalse === 'function') {
                callbackFalse() // 回调
            } else if (typeof callbackTrue === 'function') {
                callbackTrue() // 回调
            }
            utils.setCss(alertBg, {
                display: 'none'
            })
        }
    },

    /**
     * @name: 自定义alert，在自定义时间消失
     * @author: camellia
     * @email: guanchao_gc@qq.com
     * @date: 2021-01-23
     * @param:  data    string  显示的文字
     * @param:  callbackTure    function    点击确定回调函数
     * @param:  time    number  显示时间
     */
    alertMsg(data: any = '', time: number = 1, callbackTrue: any = '') {
        const alertBg = document.createElement('div')
        const alertBox = document.createElement('div')
        const alertText = document.createElement('div')
        const textNode = document.createTextNode(data || '')
        // 控制背景样式
        utils.setCss(alertBg, {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            'background-color': 'rgba(0, 0, 0, 0.1)',
            'z-index': '999999999'
        })
        // 控制 提示框样式
        utils.setCss(alertBox, {
            width: '100%',
            'max-width': '90%',
            'font-size': '18px',
            'text-align': 'center',
            'border-radius': '15px',
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        })
        if (data) {
            // 控制提示字体样式
            utils.setCss(alertText, {
                'max-width': '350px',
                height: 'auto',
                'border-bottom': '1px solid #ddd',
                padding: '16px 0px',
                color: 'white',
                'background-color': 'rgba(0, 0, 0, 0.7)',
                opacity: 1,
                'border-radius': '4px',
                margin: 'auto',
                'word-wrap': 'break-word'
            })
        }
        // 内部结构套入
        alertText.appendChild(textNode)
        alertBox.appendChild(alertText)
        alertBg.appendChild(alertBox)
        // 整体显示到页面内
        document.getElementsByTagName('body')[0].appendChild(alertBg)

        setTimeout(() => {
            if (typeof callbackTrue === 'function') {
                callbackTrue() // 回调
            }
            // 弹窗消失~
            utils.setCss(alertBg, {
                display: 'none'
            })
        }, time * 1000)
    },
    element: undefined,
    alertLoadExec(sign: any) {
        if (sign) {
            utils.alertLoading(true)
        } else if (utils.element) {
            utils.alertLoading(utils.element)
        }
    },
    /**
     * @name: 自定义loading，true/false
     * @author: camellia
     * @email: guanchao_gc@qq.com
     * @date: 2021-01-23
     * @param:  sign    boolean true:显示，false：删除
     * @param:  msg string  提示词
     */
    alertLoading(sign: any) {
        if (sign === true) {
            const alertBg = document.createElement('div')
            const alertBox = document.createElement('div')
            const alertText = document.createElement('div')
            const textNode = document.createTextNode('')
            // 控制背景样式
            utils.setCss(alertBg, {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                'z-index': '999999999',
                'background-color': 'rgba(0, 0, 0, 0.1)'
            })
            // 控制 提示框样式
            utils.setCss(alertBox, {
                width: '100%',
                'max-width': '90%',
                'font-size': '18px',
                'text-align': 'center',
                'border-radius': '15px',
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            })
            // 控制load图片显示样式
            utils.setCss(alertText, {
                width: '100px',
                height: '100px',
                background: ' url("/src/assets/img/loading.gif") no-repeat center',
                'background-size': 'cover',
                margin: '0 auto'
            })
            // 内部结构套入
            alertText.appendChild(textNode)
            alertBox.appendChild(alertText)
            alertBg.appendChild(alertBox)
            // 整体显示到页面内
            document.getElementsByTagName('body')[0].appendChild(alertBg)
            utils.element = alertBg
        }

        if (sign.parentNode) {
            sign.parentNode.removeChild(sign)
        }
    },
    /**
     * @name: 自定义alert添加css
     * @author: camellia
     * @email: guanchao_gc@qq.com
     * @date: 2021-01-23
     */
    setCss(targetObj: any, cssObj: any) {
        let str = targetObj.getAttribute('style') ? targetObj.getAttribute('style') : ''
        for (const i in cssObj) {
            str += `${i}:${cssObj[i]};`
        }
        targetObj.style.cssText = str
    }
}

// Parse the time to string
export const parseTime = (
    time?: object | string | number | null,
    cFormat?: string
): string | null => {
    if (time === undefined || !time) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date: Date
    if (typeof time === 'object') {
        date = time as Date
    } else {
        if (typeof time === 'string') {
            if (/^[0-9]+$/.test(time)) {
                // support "1548221490638"
                time = parseInt(time, 10)
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }
        if (typeof time === 'number' && time.toString().length === 10) {
            time *= 1000
        }
        date = new Date(time)
    }
    const formatObj: { [key: string]: number } = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        return value.toString().padStart(2, '0')
    })
    return timeStr
}

// Format and filter json data using filterKeys array
export const formatJson = (filterKeys: any, jsonData: any) => {
    jsonData.map((data: any) =>
        filterKeys.map((key: string) => {
            if (key === 'timestamp') {
                return parseTime(data[key])
            }
            return data[key]
        })
    )
}

// Check if an element has a class
export const hasClass = (ele: HTMLElement, className: string) => {
    return !!ele.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`))
}

// Add class to element
export const addClass = (ele: HTMLElement, className: string) => {
    if (!hasClass(ele, className)) ele.className += ` ${className}`
}

// Remove class from element
export const removeClass = (ele: HTMLElement, className: string) => {
    if (hasClass(ele, className)) {
        const reg = new RegExp(`(\\s|^)${className}(\\s|$)`)
        ele.className = ele.className.replace(reg, ' ')
    }
}

// Toggle class for the selected element
export const toggleClass = (ele: HTMLElement, className: string) => {
    if (!ele || !className) {
        return
    }
    let classString = ele.className
    const nameIndex = classString.indexOf(className)
    if (nameIndex === -1) {
        classString += `${className}`
    } else {
        classString =
            classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
    }
    ele.className = classString
}

export default utils
