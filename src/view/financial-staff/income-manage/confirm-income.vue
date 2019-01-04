<template>
  <Form :model="formItem" :label-width="80">
    <Row>
      <Col span="16" offset="4">
      <FormItem label="部门名：" style="margin-top: 40px">
        <Select v-model="formItem.department">
          <Option value="1">A部门</Option>
          <Option value="2">B部门</Option>
          <Option value="3">C部门</Option>
        </Select>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
      <FormItem label="项目名：">
        <Select v-model="formItem.project">
          <Option value="1">A项目</Option>
          <Option value="2">B项目</Option>
          <Option value="3">C项目</Option>
        </Select>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
      <FormItem label="应收款项：">
        <Select v-model="formItem.receivable">
          <Option value="1">A款项</Option>
          <Option value="2">B款项</Option>
          <Option value="3">C款项</Option>tax
        </Select>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
      <FormItem label="收入数：">
        <Input v-model="formItem.income" placeholder="请输入确认收入数"></Input>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
      <FormItem label="开票税率：">
        <Input v-model="formItem.tax" placeholder="请输入开票税率"></Input>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
      <FormItem>
        <Upload
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="96" style="color: #3399ff"></Icon>
            <p>点击选择或拖拽收入/发票凭证至此</p>
          </div>
        </Upload>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="6" offset="10">
      <FormItem>
        <Button type="primary">确 认</Button>
        <Button style="margin-left: 50px">取 消</Button>
      </FormItem>
      </Col>
    </Row>
  </Form>
</template>

<script>
export default {
  name: 'confirm-income',
  data () {
    return {
      formItem: {
        department: '',
        project: '',
        receivable: '',
        advance: '',
        income: '',
        tax: ''
      }
    }
  }
}
</script>
