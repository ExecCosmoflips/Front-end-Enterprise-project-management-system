<template>
    <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="工号" prop="username">
           <i-input :value.sync="formValidate.username" placeholder="请输入工号"></i-input>
        </Form-item>
        <Form-item label="姓名" prop="name">
            <i-input :value.sync="formValidate.name" placeholder="请输入姓名"></i-input>
        </Form-item>
        <Form-item label="邮箱" prop="email">
            <i-input :value.sync="formValidate.email" placeholder="请输入邮箱"></i-input>
        </Form-item>
        <Form-item label="手机号" prop="phone">
             <i-input :value.sync="formValidate.phone" placeholder="请输入手机号"></i-input>
        </Form-item>
       <FormItem label="性别" prop="gender">
             <RadioGroup v-model="formItem.radio">
               <Radio label="male">男</Radio>
               <Radio label="female">女</Radio>
             </RadioGroup>
           </FormItem>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')">添加</i-button>
            <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
</template>
<script>
export default {
  name: 'SuperAdmin',
  data () {
    return {
    formItem: {
          radio: '',
          },
      formValidate: {
        username: '',
        name: '',
        email: '',
        gender: '',
        phone: ''
      },
      ruleValidate: {
        username: [
          { required: true, message: '工号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
