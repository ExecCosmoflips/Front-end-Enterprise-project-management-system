<template>
  <Form :model="formItem" :label-width="80">

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
      <Button type="primary" @click="submit(formItem)">submit</Button>
    </FormItem>
  </Form>
</template>
<script>import { mapActions } from 'vuex'
export default {
  name: 'Add-treasurer',
  data () {
    return {
      formItem: {
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
      'getAddTreasurer'
    ]
    ),
    submit (formItem) {
      console.log(this.formItem)
      this.getAddTreasurer(formItem)
      console.log(formItem)
    }
  }
}

</script>
