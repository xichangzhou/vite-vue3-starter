import { createApp } from 'vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import JsonViewer from 'vue3-json-viewer'
import { globalSymbol, createGlobalState } from '@/utils/globalState'
import App from './App.vue'

import '@/styles/index.scss'
import 'nprogress/nprogress.css'
import 'splitpanes/dist/splitpanes.css'

// 全局共享的state数据
createApp(App)
    .provide(globalSymbol, createGlobalState())
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(JsonViewer)
    .mount('#app')
