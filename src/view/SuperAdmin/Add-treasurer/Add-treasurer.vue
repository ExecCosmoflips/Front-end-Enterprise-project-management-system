<template>
  <Form :model="formItem" :label-width="80">

    <FormItem label="用户名" aria-setsize="10">
      <Input v-model="formItem.username" placeholder="请输入用户名"></Input>
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
      <RadioGroup v-model="formItem.sex">
        <Radio label="0">男</Radio>
        <Radio label="1">女</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submit(formItem)">submit</Button>
    </FormItem>
  </Form>
</template>
<script>
import qs from 'qs'
import axios from '@/libs/api.request'
export default {
  name: 'Add-treasurer',
  data () {
    return {
      formItem: {
        username: '',
        name: '',
        email: '',
        sex: '',
        phone: ''
      }
    }
  },
  methods: {
    submit (formItem) {
      axios.request({
        url: '/add_financial_staff',
        data: qs.stringify(formItem),
        method: 'post'
      }).then(res => {
        alert(res.data.info)
      })
    }
  }
}

</script>
