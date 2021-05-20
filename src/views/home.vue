<template>
    <el-row>
        <el-col :span="7">
            <p>count: {{ count }}</p>
            <p>倍数： {{ multiple }}</p>
            <div>
                <button @click="increase()">加1</button>
                <button @click="decrease()">减一</button>
            </div>
            <div class="homePage">
                <p>姓名： {{ nickname }}</p>
                <p>年龄： {{ age }}</p>
            </div>
        </el-col>
        <el-col :span="17">
            <el-button type="primary" @click="pushAxios">go axios</el-button>
            <el-button type="primary" @click="setTitle">setTitle</el-button>
            <child />
            <x-checkbox />
            <div @click="openModal()">打开模态框</div>
            <x-modal @confirmModal="confirmModal" :modalShow="modalShow" :title="modalTitle">
                <div style="width: 100%; box-sizing: border-box">
                    <div class="input-button" style="margin-bottom: 0px" v-if="!loginSign">
                        <input
                            type="text"
                            placeholder="请输入您的邮箱！"
                            v-model="email"
                            style="width: 100%"
                        />
                    </div>
                </div>
            </x-modal>
            <div @click="showAlert()">alert</div>
            <div @click="openDrawer()">open drawer</div>
            <x-drawer :drawerShow="drawerShow" @closeDrawer="closeDrawer" />
            <x-button
                :type="type"
                :circle="circle"
                :plain="plain"
                :size="size"
                :color="color"
                :titleColor="titleColor"
                @click="click"
                >button</x-button
            >
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs, ref, provide } from 'vue'
import router from '@/router'
import useCount from '@/hooks/useCount'
import useXModal from '@/hooks/useXModal'
import useXDrawer from '@/hooks/useXDrawer'
import useXButton from '@/components//XButton/useXButton'

import XCheckbox from '@/components/XCheckbox.vue'
import XModal from '@/components/XModal.vue'
import utils from '@/utils/utils'
import XDrawer from '@/components/XDrawer.vue'
import XButton from '@/components/XButton/XButton.vue'
import Child from './Child.vue'

export default defineComponent({
    components: { Child, XCheckbox, XModal, XDrawer, XButton },
    name: 'HelloWorld',
    props: {},
    setup: () => {
        const pushAxios = () => {
            router.push('/axios')
        }

        const { count, multiple, increase, decrease } = useCount(10)

        // 侦听 reactive 定义的数据 开始
        const state = reactive({ nickname: 'xiaofan', age: 20, content: [1, 2] })

        setTimeout(() => {
            // eslint-disable-next-line no-plusplus
            state.age++
        }, 1000)

        // 修改age值时会触发 watch的回调
        watch(
            () => state.age,
            (curAge, preAge) => {
                console.log('新值:', curAge, '老值:', preAge)
            }
        )
        // 侦听 reactive 定义的数据 结束

        // 侦听 ref 定义的数据 开始
        const year = ref(0)

        setTimeout(() => {
            // eslint-disable-next-line no-plusplus
            year.value++
        }, 1000)

        watch(
            year,
            (newVal, oldVal) => {
                console.log('新值:', newVal, '老值:', oldVal)
            },
            { immediate: true }
        )
        // 侦听 ref 定义的数据 结束

        // 侦听多个数据
        watch([() => state.age, year], ([curAge, newVal], [preAge, oldVal]) => {
            console.log('新值:', curAge, '老值:', preAge)
            console.log('新值:', newVal, '老值:', oldVal)
        })

        // 如果不使用第三个参数deep:true， 是无法监听到数据变化的。
        // 前面我们提到，默认情况下，watch 是惰性的, 那什么情况下不是惰性的， 可以立即执行回调函数呢？其实使用也很简单， 给第三个参数中设置immediate: true即可。
        const state1 = reactive({
            room: {
                id: 100,
                attrs: {
                    size: '140平方米',
                    type: '三室两厅'
                }
            }
        })
        const stopWatch = watch(
            () => state1.room,
            (newType, oldType) => {
                console.log('新值:', newType, '老值:', oldType)
            },
            { deep: true }
        )

        setTimeout(() => {
            // 停止监听
            stopWatch()
        }, 1000)

        const title = ref('这个是要传的值')

        // 传递值
        provide('title', title)

        const setTitle = () => {
            title.value = Math.random().toString()
        }

        const showAlert = () => {
            utils.alertMsg('成功')

            setTimeout(() => {
                utils.alertLoadExec(false)
            }, 2000)
        }

        return {
            count,
            pushAxios,
            multiple,
            increase,
            decrease,
            ...toRefs(state),
            title,
            setTitle,
            ...useXModal(),
            showAlert,
            ...useXDrawer(),
            ...useXButton()
        }
    }
})
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
