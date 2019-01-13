<template>
  <Form :model="formItem" :label-width="80">

    <FormItem label="设置企业名" aria-setsize="10">
      <Input v-model="formItem.name" placeholder="请设置企业名"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submit(formItem)">submit</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'Company-name',
  data () {
    return {
      formItem: {
        name: ''
      }
    }
  },
  methods: {
    submit (formItem) {
      console.log(this.formItem)
      this.SetupDepartmentName(formItem)
      console.log(formItem)
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
