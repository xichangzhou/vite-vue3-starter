import { createApp } from 'vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import { globalSymbol, createGlobalState } from '@/utils/globalState'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css'

// 全局共享的state数据
createApp(App)
    .provide(globalSymbol, createGlobalState())
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
