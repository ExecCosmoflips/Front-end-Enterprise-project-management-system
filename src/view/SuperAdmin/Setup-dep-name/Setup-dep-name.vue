<template>
  <Form :model="formItem" :label-width="80">

    <FormItem label="设置部门名" aria-setsize="10">
      <Input v-model="formItem.name" placeholder="请输入新的部门名"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submit(formItem)">submit</Button>
    </FormItem>
  </Form>
</template>
<script>import { mapActions } from 'vuex'
export default {
  name: 'Setup-dep-name',
  data () {
    return {
      formItem: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'SetupDepartmentName'
    ]
    ),
    submit (formItem) {
      console.log(this.formItem)
      this.SetupDepartmentName(formItem)
      console.log(formItem)
    }
  }
}

</script>
