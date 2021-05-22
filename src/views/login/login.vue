<template>
    <div class="wrap bg">
        <div class="form">
            <el-form :model="ruleForm" :rules="rules" ref="loginFormRef">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="ruleForm.password"
                        show-password
                        prefix-icon="el-icon-lock"
                    ></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button
                        type="primary"
                        size="medium"
                        @click="submitForm"
                        style="width: 100%; margin-bottom: 30px"
                        >登 录</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { setToken } from '@/utils/cookies'
import utils from '@/utils/utils'
import { encrypt } from '@/utils/ase'

export default defineComponent({
    name: 'Login',
    setup() {
        const router = useRouter()

        const loginFormRef = ref(null)
        // 定义变量
        const ruleForm = reactive({
            username: '',
            password: ''
        })

        const rules = {
            username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
            password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }

        const submitForm = () => {
            ;(loginFormRef.value as any).validate((valid: boolean) => {
                if (valid) {
                    const { username, password } = ruleForm
                    utils.alertMsg(username + encrypt(password))
                    setToken(username)
                    router.push('/')
                }
            })
        }

        return {
            ruleForm,
            rules,
            submitForm,
            loginFormRef
        }
    }
})
</script>

<style lang="scss">
.wrap {
    color: #ffffff;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg {
    background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
}

.form {
    width: 400px;
    overflow: hidden;
}
</style>
