declare module '*.vue' {
    import { DefineComponent } from 'vue'

    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'vue3-json-viewer'
declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/github.js'
