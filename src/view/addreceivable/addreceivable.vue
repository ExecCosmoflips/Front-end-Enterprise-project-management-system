<template>
  <div>
    <Form :model="formItem" :label-width="80">


      <FormItem label="选择类别">
        <Select v-model="formItem.category" @on-change="getReceivableInfo(formItem.category)">
          <Option> v-for=" item in categoryList " :key="item.category_id" :value="item.category_id" > {{ item.category_name }} </Option>
        </Select>
      </FormItem>

      <FormItem label="应收项标题" aria-setsize="10">
        <Input v-model="formItem.title" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="应收数">
        <Input v-model="formItem.number" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>

      <FormItem>
        <Upload
          v-model="formItem.agreement"
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
  import {  mapState,mapActions } from 'vuex'
  export default {
    name: 'addreceivable',
    data () {
      return {
        formItem: {

          category: '',
          title: '',
          number: '',
          agreement: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.addreceivablee.categoryList

      })
    },
    methods: {
      ...mapActions([
          'Addreceivable',
          'getCategoryList'

        ]
      ),
      submit (formItem) {
        this.Addreceivable(formItem)
      }

    },
    mounted() {
      this.getCategoryList()

    }
  }
</script>
