<template>
  <Form :model="formItem" :label-width="80">
    <Row style="margin-top: 20px">
      <Col span="12">
      <FormItem label="部门名：">
        <Select v-model="formItem.department">
          <Option value="1">A部门</Option>
          <Option value="2">B部门</Option>
          <Option value="3">C部门</Option>
        </Select>
      </FormItem>
      </Col>
      <Col span="12">
      <FormItem label="项目名：">
        <Select v-model="formItem.project">
          <Option value="1">A项目</Option>
          <Option value="2">B项目</Option>
          <Option value="3">C项目</Option>
        </Select>
      </FormItem>
      </Col>
    </Row>
      <Table style="margin-top: 20px" border :columns="columns" :data="data"></Table>
  </Form>
</template>

<script>
export default {
  name: 'check-expend',
  data () {
    return {
      formItem: {
        department: '',
        project: ''
      },
      columns: [
        {
          title: '部门',
          key: 'department'
        },
        {
          title: '项目',
          key: 'project'
        },
        {
          title: '费用类别',
          key: 'expend'
        }
      ],
      data: [
        {
          department: '',
          project: '',
          expend: ''
        }
      ]
    }
  }
}
</script>
