<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="选择部门">
      <Select v-model="formItem.department">
        <Option value="Abumen">A部门</Option>
        <Option value="Bbumen">B部门</Option>
        <Option value="Cbumen">C部门</Option>
      </Select>
    </FormItem>
    <FormItem label="工号" aria-setsize="10">
      <Input v-model="formItem.username" placeholder="请输入工号"></Input>
    </FormItem>
    <FormItem label="姓名" aria-setsize="10">
      <Input v-model="formItem.name" placeholder="请输入姓名"></Input>
    </FormItem>
    <FormItem label="邮箱" aria-setsize="10">
      <Input v-model="formItem.email" placeholder="请输入邮箱"></Input>
    </FormItem>
    <FormItem label="手机号" aria-setsize="10">
      <Input v-model="formItem.phone" placeholder="请输入手机号"></Input>
    </FormItem>
    <FormItem label="性别">
      <RadioGroup v-model="formItem.gender">
        <Radio label="male">男</Radio>
        <Radio label="female">女</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
            <Button type="primary" @click="submit(formItem)">Submit</Button>
    </FormItem>
    </Form>
</template>
<script>import { mapActions } from 'vuex'
export default {
  name: 'Add-dep-admin',
  data () {
    return {
      formItem: {
        department: '',
        username: '',
        name: '',
        email: '',
        gender: '',
        phone: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'getAddDepartmentAdmin'
    ]
    ),
    submit (formItem) {
      console.log(this.formItem)
      this.getAddDepartmentAdmin(formItem)
      console.log(formItem)
    }
  }
}

</script>
