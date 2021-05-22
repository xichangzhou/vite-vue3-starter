import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import Vuex from '@/views/vuex.vue'
import Error from '@/views/Error.vue'
import Test from '@/views/Test.vue'
import { getToken } from '@/utils/cookies'

export const homeRoutes = [
    {
        path: '/vuex',
        name: 'Vuex',
        component: Vuex,
        meta: {
            title: 'Vuex'
        }
    },
    {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/views/axios.vue'),
        meta: {
            title: '请求'
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: Test,
        meta: {
            title: '测试'
        },
        children: [
            {
                path: '',
                component: () => import('@/views/test/empty.vue'),
                meta: {
                    isShow: false
                }
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                name: 'profile',
                path: 'profile',
                component: () => import('@/views/test/profile.vue'),
                meta: {
                    title: '测试1',
                    path: '/test/profile'
                },
                children: [
                    {
                        name: 'post1',
                        path: 'post',
                        component: () => import('@/views/test/post.vue'),
                        meta: {
                            title: '测试二wwww',
                            path: '/test/profile/post'
                        }
                    }
                ]
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                name: 'post',
                path: 'post',
                component: () => import('@/views/test/post.vue'),
                meta: {
                    title: '测试二'
                }
            }
        ]
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
    } else {
        next()
    }
})

router.afterEach(() => {
    NProgress.done()
    NProgress.remove()
})

export default router
