<style lang="less">
  @import './signin.less';
</style>
<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录企业项目数据财务管理" :bordered="false">
        <div class="form-con">
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="username">
      <Input v-model="form.username" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
      <Input type="password" v-model="form.verifyPassword" placeholder="请重复密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    <FormItem>
    </FormItem>
    <Input type="text" v-model="form.name" placeholder="姓名">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
    </Input>
    <br>
    <FormItem>
      <Button @click="handleSubmit(form)" type="primary" long>注册</Button>
    </FormItem>
  </Form>
          <p class="login-tip">请用户名和密码</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>import { getParams } from '@/libs/util'
import { mapActions } from 'vuex'
export default {
  name: 'siginin',
  data () {
    return {
      data1: {},
      form: {
        username: '',
        password: '',
        verifyPassword: '',
        name: '',
        department_id: '',
        user_id: ''
      },
      rules: {
        username: { required: true, message: '账号不能为空', trigger: 'blur' },
        password: { required: true, message: '密码不能为空', trigger: 'blur' }
      }
    }
  },
  methods: {
    ...mapActions([
      'handleSignIn'
    ]),
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.handleSignIn(this.form).then(res => {
            this.$router.push({
              name: this.$config.homeName
            })
          })
        }
      })
    }
  },
  mounted () {
    this.data1 = getParams(window.location.href)
    this.form = this.data1
  }
}
</script>

<style scoped>

</style>
