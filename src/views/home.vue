<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
    <div v-if="loading">Loading.....</div>
    <el-table v-if="loaded" :data="sysUserRooms" border style="width: 100%">
        <el-table-column fixed prop="oid" label="日期" width="150"> </el-table-column>
        <el-table-column prop="user_id" label="姓名" width="120"> </el-table-column>
        <el-table-column prop="ld_dm" label="省份" width="120"> </el-table-column>
        <el-table-column prop="xq_dm" label="省份" width="120"> </el-table-column>
        <el-table-column prop="room_dm" label="市区" width="120"> </el-table-column>
        <el-table-column prop="room_id" label="地址" width="600"> </el-table-column>
        <el-table-column prop="room_name" label="邮编" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template #default="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
        <span class="demonstration">完整功能</span>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
        >
        </el-pagination>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs, ref, provide, computed } from 'vue'
import router from '@/router'
import useCount from '@/hooks/useCount'
import useXModal from '@/hooks/useXModal'
import useXDrawer from '@/hooks/useXDrawer'
import useXButton from '@/components//XButton/useXButton'
import useUrlAxios from '@/hooks/useUrlAxios'

export default defineComponent({
    components: {},
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

        const onSubmit = () => {
            console.log('submit!')
        }

        const handleClick = (row) => {
            console.log(row)
        }

        const handleSizeChange = (val) => {
            console.log(`每页 ${val} 条`)
        }

        const handleCurrentChange = (val) => {
            console.log(`当前页: ${val}`)
        }

        const { result, loading, loaded } = useUrlAxios('/api/sysUserRoom/test')

        const double = computed(() => {
            return JSON.stringify(result, null, 4)
        })

        console.log(result)

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
            ...useXDrawer(),
            ...useXButton(),
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            double,
            loading,
            loaded,
            onSubmit,
            handleClick,
            handleSizeChange,
            handleCurrentChange,
            currentPage4: 4,
            sysUserRooms: result,
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }
            ]
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
