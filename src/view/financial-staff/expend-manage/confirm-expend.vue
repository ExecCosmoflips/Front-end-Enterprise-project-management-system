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
      <FormItem label="费用类别：">
        <Select v-model="formItem.category">
          <Option value="1">A类别</Option>
          <Option value="2">B类别</Option>
          <Option value="3">C类别</Option>
        </Select>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
      <FormItem label="费用款数：">
        <Input v-model="formItem.expend" placeholder="请输入费用款数"></Input>
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
            <p>点击选择或拖拽费用支出凭证至此</p>
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
  name: 'comfirm-expend',
  data () {
    return {
      formItem: {
        department: '',
        project: '',
        category: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
