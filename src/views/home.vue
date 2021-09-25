<template>
    <el-form :model="ruleForm" label-width="120px" ref="formRef">
        <el-row>
            <el-col :span="8"
                ><el-form-item label="房间代码:">
                    <el-input v-model="ruleForm.room_dm"></el-input> </el-form-item
            ></el-col>
            <el-col :span="8"
                ><el-form-item label="房间名:">
                    <el-input v-model="ruleForm.room_name"></el-input> </el-form-item
            ></el-col>
            <el-col :span="8"
                ><el-form-item label="用户id:">
                    <el-input v-model="ruleForm.user_id"></el-input> </el-form-item
            ></el-col>
        </el-row>
        <el-row
            ><el-col :span="24" class="groups"
                ><el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item></el-col
            ></el-row
        >
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="oid" label="oid" width="200"> </el-table-column>
        <el-table-column prop="user_id" label="用户Id" width="200"> </el-table-column>
        <el-table-column prop="ld_dm" label="楼栋代码" width="200"> </el-table-column>
        <el-table-column prop="xq_dm" label="校区代码" width="200"> </el-table-column>
        <el-table-column prop="room_dm" label="房间代码" width="200"> </el-table-column>
        <el-table-column prop="room_id" label="房间Id" width="200"> </el-table-column>
        <el-table-column prop="room_name" label="房间名" width="200"> </el-table-column>
        <el-table-column fixed="right" label="操作">
            <template #default="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">解绑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import service from '@/utils/http'

export default defineComponent({
    components: {},
    name: 'HelloWorld',
    props: {},
    setup: () => {
        const handleClick = (row: any) => {
            console.log(row.oid)
        }

        const formRef = ref(null)

        // 定义变量
        const ruleForm = reactive({
            room_dm: '',
            room_name: '',
            user_id: ''
        })

        const reset = (): void => {
            console.log('aaaaaaaaaaaa')
            ;(formRef.value as any).resetFields()
        }

        const state = reactive({
            tableData: [] // 数据列表
        })

        const fetch = async (param: any) => {
            const res = await service({
                url: '/sysUserRoom/search',
                method: 'post',
                data: param
            })
            state.tableData = res.data.sysUserRooms
        }

        const onSubmit = () => {
            // eslint-disable-next-line camelcase
            const { room_dm, room_name, user_id } = ruleForm
            fetch({ room_dm, room_name, user_id })
        }

        return {
            onSubmit,
            reset,
            handleClick,
            ...toRefs(state),
            ruleForm,
            formRef
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
