import { createApp } from 'vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import JsonViewer from 'vue3-json-viewer'
import VXETable from 'vxe-table'
import VMdEditor from '@kangc/v-md-editor'
import faker from 'faker'

import { globalSymbol, createGlobalState } from '@/utils/globalState'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import App from './App.vue'

import 'xe-utils'
import 'vxe-table/lib/style.css'
import '@/styles/index.scss'
import 'nprogress/nprogress.css'
import 'splitpanes/dist/splitpanes.css'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/github.css'

VMdEditor.use(githubTheme)

const app = createApp(App)
app.config.globalProperties.$faker = faker
// 全局共享的state数据
app.provide(globalSymbol, createGlobalState())
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(JsonViewer)
    .use(VXETable)
    .use(VMdEditor)
    .mount('#app')
