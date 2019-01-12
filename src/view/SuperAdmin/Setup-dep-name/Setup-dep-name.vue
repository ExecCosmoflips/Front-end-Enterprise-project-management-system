<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="设置部门名" aria-setsize="10">
      <Input v-model="formItem.setup" placeholder="请输入部门名"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submit(formItem)">Submit</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'Setup-dep-name',
  data () {
    return {
      formItem: {
        setup: ''
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
