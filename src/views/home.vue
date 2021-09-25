<template>
    <el-form ref="form" :model="form" label-width="120px">
        <el-row>
            <el-col :span="8"
                ><el-form-item label="room_dm:">
                    <el-input v-model="form.room_dm"></el-input> </el-form-item
            ></el-col>
            <el-col :span="8"
                ><el-form-item label="room_name:">
                    <el-input v-model="form.room_name"></el-input> </el-form-item
            ></el-col>
            <el-col :span="8"
                ><el-form-item label="user_id:">
                    <el-input v-model="form.user_id"></el-input> </el-form-item
            ></el-col>
        </el-row>
        <el-row
            ><el-col :span="24" class="groups"
                ><el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                    <el-button>重置</el-button>
                </el-form-item></el-col
            ></el-row
        >
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="oid" label="oid" width="150"> </el-table-column>
        <el-table-column prop="user_id" label="user_id" width="120"> </el-table-column>
        <el-table-column prop="ld_dm" label="ld_dm" width="120"> </el-table-column>
        <el-table-column prop="xq_dm" label="xq_dm" width="120"> </el-table-column>
        <el-table-column prop="room_dm" label="room_dm" width="120"> </el-table-column>
        <el-table-column prop="room_id" label="room_id" width="600"> </el-table-column>
        <el-table-column prop="room_name" label="room_name" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template #default="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">解绑</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination
            class="pagination"
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
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import service from '@/utils/http'

export default defineComponent({
    components: {},
    name: 'HelloWorld',
    props: {},
    setup: () => {
        const onSubmit = () => {
            console.log('submit!')
        }

        const handleClick = (row: any) => {
            console.log(row.oid)
        }

        const handleSizeChange = (val: any) => {
            console.log(`每页 ${val} 条`)
        }

        const handleCurrentChange = (val: any) => {
            console.log(`当前页: ${val}`)
        }

        const state = reactive({
            loading: false,
            tableData: [], // 数据列表
            multipleSelection: [], // 选中项
            total: 0, // 总条数
            currentPage: 1, // 当前页
            pageSize: 10, // 分页大小
            orderNo: '', // 订单号
            orderStatus: '', // 订单状态
            options: [
                {
                    value: '',
                    label: '全部'
                },
                {
                    value: 0,
                    label: '待支付'
                },
                {
                    value: 1,
                    label: '已支付'
                },
                {
                    value: 2,
                    label: '配货完成'
                },
                {
                    value: 3,
                    label: '出库成功'
                },
                {
                    value: 4,
                    label: '交易成功'
                },
                {
                    value: -1,
                    label: '手动关闭'
                },
                {
                    value: -2,
                    label: '超时关闭'
                },
                {
                    value: -3,
                    label: '商家关闭'
                }
            ]
        })

        const fetch = async () => {
            const res = await service({
                url: '/sysUserRoom/list',
                method: 'post',
                params: null
            })
            console.log(res)
            state.tableData = res.data.sysUserRooms
        }

        onMounted(() => {
            fetch()
        })

        return {
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
            onSubmit,
            handleClick,
            handleSizeChange,
            handleCurrentChange,
            currentPage4: 4,
            ...toRefs(state)
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
.groups {
    text-align: center;
}

.pagination {
    margin: 8px;
    margin-right: 0px;
    padding-right: 0px;
    text-align: right;
}
</style>
