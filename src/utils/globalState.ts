import { reactive, provide, inject, readonly } from 'vue'

/**
 * 创建全局共享的state
 */
export const globalSymbol = Symbol('state')

export const useGlobalState = () => inject(globalSymbol)

export const createGlobalState = () => {
    const state = reactive({ counter: 0 })
    const increment = () => {
        state.counter += 1
    }

    return { increment, state: readonly(state) }
}

export const provideState = (key = Symbol(Math.random().toString()), value: any) =>
    provide(key, value)

export const injectState = (key = '') => {
    return inject(key)
}
