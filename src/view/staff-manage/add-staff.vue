<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="工号" prop="number">
      <Row>
        <Col span="10">
          <Input v-model="formValidate.number" placeholder="填写工号"></Input>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="姓名" prop="name">
      <Row>
        <Col span="10">
          <Input v-model="formValidate.name" placeholder="填写姓名"></Input>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="邮箱" prop="mail">
      <Row>
        <Col span="10">
          <Input v-model="formValidate.mail" placeholder="填写邮箱"></Input>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="手机号" prop="telephone">
      <Row>
        <Col span="10">
          <Input v-model="formValidate.telephone" placeholder="填写手机号"></Input>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="是否跨部门执行项目" prop="whether">
      <RadioGroup v-model="formValidate.whether">
        <Radio label="yes">是</Radio>
        <Radio label="no">否</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">清空</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data () {
    return {
      formValidate: {
        number: '',
        name: '',
        mail: '',
        telephone: '',
        whether: ''
      },
      ruleValidate: {
        number: [
          { required: true, message: '工号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ],
        whether: [
          { required: true, message: '请选择是否跨部门执行项目', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
