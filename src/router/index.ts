import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import Error from '@/views/Error.vue'
import Test from '@/views/Test.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '主页'
        }
    },
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
        path: '/test/:id',
        name: 'Test',
        component: Test,
        meta: {
            title: '测试'
        },
        children: [
            { path: '', component: () => import('@/views/test/empty.vue') },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                name: 'profile',
                path: 'profile',
                component: () => import('@/views/test/profile.vue'),
                meta: {
                    title: '测试1'
                }
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

router.beforeEach((to, from) => {
    NProgress.start()
    console.log(to, from)
    // return false
})

router.afterEach((to, from) => {
    console.log(to, from)
    NProgress.done()
    NProgress.remove()
})

export default router
