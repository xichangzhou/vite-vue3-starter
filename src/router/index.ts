import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import Error from '@/views/Error.vue'
import { getToken } from '@/utils/cookies'
// 引入在axios暴露出的clearPending函数
import { clearPending } from '@/utils/http'

export const homeRoutes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
            title: 'home'
        }
    }
]

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: 'Login',
            isShow: false
        }
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/layout/homeLayout.vue'),
        meta: {
            title: '主页'
        },
        children: homeRoutes
    },
    {
        path: '/:catchAll(.*)*',
        name: 'Error',
        component: Error,
        meta: {
            isShow: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            el: '#app',
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    }
})

router.beforeEach((to, from, next) => {
    // 在跳转路由之前，先清除所有的请求
    clearPending()
    NProgress.start()

    const token = getToken()

    if (!token) {
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login' })
            NProgress.done()
        }
    } else if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done()
    } else if (to.path === '/') {
        next({ path: '/home' })
        NProgress.done()
    } else {
        next()
    }
})

router.afterEach(() => {
    NProgress.done()
    NProgress.remove()
})

export default router
