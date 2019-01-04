<template>
    <i-form :model="formRight" label-position="right" :label-width="100">
        <Form-item label="设置部门名" prop="setup">
           <i-input type="setup" :value.sync="formRight.setup"></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formRight')">确认</i-button>
            <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
</template>
<script>
export default {
  name: 'SuperAdmin',
  data () {
    return {
      formRight: {
        setup: ''
      },
      ruleRight: {
        setup: [
          { required: true, message: '', trigger: 'blur' }
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
    }
  }
}
</script>
