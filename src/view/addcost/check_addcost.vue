<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="选择部门">
      <Select v-model="formItem.select1">
        <Option value="beijing">A部门</Option>
        <Option value="shanghai">B部门</Option>
        <Option value="shenzhen">C部门</Option>
      </Select>
    </FormItem>
    <FormItem label="选择项目">
      <Select v-model="formItem.select2">
        <Option value="beijing">A项目</Option>
        <Option value="shanghai">B项目</Option>
        <Option value="shenzhen">C项目</Option>
      </Select>
    </FormItem>
    <FormItem label="费用类别">
      <RadioGroup v-model="formItem.radio">
        <Radio label="male">费用类别1</Radio>
        <Radio label="female">费用类别2</Radio>
        <Radio label="female2">费用类别3</Radio>
      </RadioGroup>
    </FormItem>
    <Table style="margin-top: 20px" border :columns="columns" :data="data"></Table>
  </Form>
</template>

<script>
    export default {
        name: "check_addcost",
      data(){
          return{
            formItem: {
              select1: '',
              select2: '',
              radio: ''
            },
            columns: [
              {
                title: '部门',
                key: 'select1'
              },
              {
                title: '项目',
                key: 'select2'
              },
              {
                title: '费用类别',
                key: 'radio'
              },
              {
                title: '费用标题',
                key: 'input'
              },
              {
                title: '费用数',
                key: 'textarea'
              }
            ],
            data: [
              {
                select1: '',
                select2: '',
                radio: '',
                input: '',
                textarea: ''
              }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
