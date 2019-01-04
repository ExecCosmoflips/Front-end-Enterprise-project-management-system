<template>
  <Form :model="formItem" :label-width="80">
    <Row style="margin-top: 20px">
      <Col span="8">
      <FormItem label="部门名：">
        <Select v-model="formItem.department">
          <Option value="1">A部门</Option>
          <Option value="2">B部门</Option>
          <Option value="3">C部门</Option>
        </Select>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="项目名：">
        <Select v-model="formItem.project">
          <Option value="1">A项目</Option>
          <Option value="2">B项目</Option>
          <Option value="3">C项目</Option>
        </Select>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="应收款项：">
        <Select v-model="formItem.receivable">
          <Option value="1">A款项</Option>
          <Option value="2">B款项</Option>
          <Option value="3">C款项</Option>
        </Select>
      </FormItem>
      </Col>
    </Row>
      <Table style="margin-top: 20px" border :columns="columns" :data="data"></Table>
  </Form>
</template>

<script>
export default {
  name: 'check-income',
  data () {
    return {
      formItem: {
        department: '',
        project: '',
        receivable: ''
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
          title: '应收款项',
          key: 'receivable'
        },
        {
          title: '收款数',
          key: 'income'
        },
        {
          title: '开票税率',
          key: 'tax'
        }
      ],
      data: [
        {
          department: '',
          project: '',
          receivable: '',
          income: '',
          tax: ''
        }
      ]
    }
  }
}
</script>
