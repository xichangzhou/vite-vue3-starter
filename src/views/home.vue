<template>
    <el-form :model="ruleForm" label-width="120px" ref="formRef" @keyup.enter="onSubmit">
        <el-row>
            <el-col :span="8"
                ><el-form-item label="房间代码:" prop="room_dm">
                    <el-input v-model="ruleForm.room_dm" clearable></el-input> </el-form-item
            ></el-col>
            <el-col :span="8"
                ><el-form-item label="房间名:" prop="room_name">
                    <el-input v-model="ruleForm.room_name" clearable></el-input> </el-form-item
            ></el-col>
            <el-col :span="8"
                ><el-form-item label="用户id:" prop="user_id">
                    <el-input v-model="ruleForm.user_id" clearable></el-input> </el-form-item
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
        <el-table-column prop="user_name" label="用户名" width="200"> </el-table-column>
        <el-table-column prop="ld_dm" label="楼栋代码" width="200"> </el-table-column>
        <el-table-column prop="xq_dm" label="校区代码" width="200"> </el-table-column>
        <el-table-column prop="room_dm" label="房间代码" width="200"> </el-table-column>
        <el-table-column prop="room_id" label="房间Id" width="200"> </el-table-column>
        <el-table-column prop="room_name" label="房间名" width="200"> </el-table-column>
        <el-table-column fixed="right" label="操作">
            <template #default="scope">
                <el-button @click="unbundling(scope.row)" type="text" size="small">解绑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, unref } from 'vue'
import { ElMessage } from 'element-plus'
import service from '@/utils/http'

export default defineComponent({
    components: {},
    name: 'HelloWorld',
    props: {},
    setup: () => {
        const formRef = ref(null)

        const reset = () => {
            const form: any = unref(formRef)
            form.resetFields()
        }

        const state = reactive({
            tableData: [], // 数据列表
            ruleForm: {
                room_dm: '',
                room_name: '',
                user_id: ''
            }
        })

        const fetch = async (param: any) => {
            const res = await service({
                url: '/sysUserRoom/search',
                method: 'post',
                data: param
            })
            console.log(res)

            state.tableData = res.list
        }

        const unbundling = async (row: any) => {
            const res = await service({
                url: '/sysUserRoom/unbundling',
                method: 'post',
                data: { ...row }
            })
            const { deleteCount } = res
            if (deleteCount > 0) {
                ElMessage('解绑成功!')
                state.tableData = []
                reset()
            } else {
                ElMessage('解绑失败!')
            }
        }

        const onSubmit = async () => {
            const form: any = unref(formRef)
            if (!form) return
            try {
                await form.validate()
                // eslint-disable-next-line camelcase
                const { room_dm, room_name, user_id } = state.ruleForm
                // eslint-disable-next-line camelcase
                if (room_dm === '' && room_name === '' && user_id === '') {
                    ElMessage('请输入搜索条件!')
                    return
                }
                fetch({ room_dm, room_name, user_id })
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log(error)
            }
        }

        return {
            onSubmit,
            reset,
            unbundling,
            ...toRefs(state),
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
