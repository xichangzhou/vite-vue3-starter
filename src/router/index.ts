import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import Error from '@/views/Error.vue'
import Test from '@/views/Test.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/vuex',
        name: 'Vuex',
        component: Vuex
    },
    {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/views/axios.vue') // 懒加载组件
    },
    {
        path: '/test/:id',
        name: 'Test',
        component: Test,
        children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                component: Home
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'posts',
                component: Home
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'Error',
        component: Error
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

export default router
