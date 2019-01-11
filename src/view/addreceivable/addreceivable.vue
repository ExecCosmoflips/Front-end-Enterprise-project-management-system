<template>
  <div>
  <Form :model="formItem" :label-width="80">

    <FormItem label="选择项目">
      <Select v-model="formItem.project">

        <Option value="beijing">title</Option>
        <Option value="shanghai">B项目</Option>
        <Option value="shenzhen">C项目</Option>
      </Select>
    </FormItem>

    <FormItem label="收入类别">
      <RadioGroup v-model="formItem.category">
        <Radio label="male">收入类别1</Radio>
        <Radio label="female">收入类别2</Radio>
        <Radio label="female2">收入类别3</Radio>
      </RadioGroup>
    </FormItem>

    <FormItem label="应收项标题" aria-setsize="10">
      <Input v-model="formItem.title" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="应收数">
      <Input v-model="formItem.number" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="应收数333">
      <Input v-model="formItem.agreement" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
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
  </Form>
      <Button type="primary" @click=submit(formItem)>Submit</Button>
      <Button style="margin-left: 8px">Cancel</Button>
  </div>


</template>
<script>
  import {mapActions} from 'vuex'
export default {
  name: 'addreceivable',
  data () {
    return {
      formItem: {
        project: '',
        category: '',
        title: '',
        number: '',
        agreement: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  },

  methods: {
    ...mapActions([
      'Addreceivable'
  ]
    ),
   submit(formItem) {

     /* let project = this.formItem.project
      console.log(project)
      let category = this.formItem.category
      let title = this.formItem.title
      let number = this.formItem.number
      let agreement = this.formItem.agreement*/
     console.log(this.formItem)
     this.Addreceivable(formItem)
     console.log(formItem)
  },

  }

  }
</script>
