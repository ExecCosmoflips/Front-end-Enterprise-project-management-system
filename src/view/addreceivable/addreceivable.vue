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
    <FormItem label="日期选择">
      <Row>
        <Col span="11">
          <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
        </Col>
        <Col span="2" style="text-align: center">-</Col>
        <Col span="11">
          <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="收入类别">
      <RadioGroup v-model="formItem.radio">
        <Radio label="male">收入类别1</Radio>
        <Radio label="female">收入类别2</Radio>
        <Radio label="female2">收入类别3</Radio>
      </RadioGroup>
    </FormItem>

    <FormItem label="应收项标题" aria-setsize="10">
      <Input v-model="formItem.input" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="应收数">
      <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem>
      <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击或拖拽要上传的凭证至此</p>
        </div>
      </Upload>
    </FormItem>
    <FormItem>
      <Button type="primary">Submit</Button>
      <Button style="margin-left: 8px">Cancel</Button>
    </FormItem>

  </Form>

</template>
<script>
export default {
  name: 'addreceivable',
  data () {
    return {
      formItem: {
        input: '',
        select1: '',
        select2: '',
        radio: '',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }
}
</script>
