<template>
  <div>
    <Form :model="formItem" :rules="ruleValidate" :label-width="80" ref="formItem">

      <FormItem label="选择项目" prop="project">
        <Select v-model="formItem.project" @on-change="getCategory(formItem.project)">
          <Option v-for=" item in projectList " :key="item.project_id" :value="item.project_id" > {{ item.project_name }} </Option>
        </Select>
      </FormItem>
      <FormItem label="选择类别" prop="category">
        <Select v-model="formItem.category" >
          <Option  v-for=" item in categoryList " :key="item.category_id" :value="item.category_id" > {{ item.category_name }} </Option>
        </Select>
      </FormItem>

      <FormItem label="应收项标题" aria-setsize="10" prop="title">
        <Input v-model="formItem.title" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="应收数" prop="number">
        <Input v-model="formItem.number" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>

      <FormItem prop="image">
        <i-col span="16" offset="4">
          <Card style="width:625px">
            <div class="cropper-example cropper-first">
              <cropper
                :insideSrc="formItem.agreement"
                :src="formItem.agreement"
                crop-button-text="确认凭证"
                @on-crop="handleCroped"
              ></cropper>
            </div>
          </Card>
        </i-col>
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
        },
        ruleValidate: {

          project: [{
            type: 'number', required: true, message: '请选择项目', trigger: 'change'
          }],
          category: [{
            type: 'string', required: true, message: '请选择应收类别', trigger: 'change'
          }],
          title: [{
            type: 'string', required: true, message: '请选择应收款项', trigger: 'change'
          }],
          number: [{
            required: true, message: '请输入确认收入数', trigger: 'blur'
          }],
          image: [{
            required: true, message: '未上传图片', trigger: 'blur'
          }]
        },
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.addreceivablee.categoryList,
        projectList: state => state.addreceivablee.projectList

      })
    },
    methods: {
      ...mapActions([
          'Addreceivable',
          'getCategoryList4',
          'getProjectList4',

        ]

      ),
      handleCroped (img) {
        this.formData.append('agreement', img)
        this.formItem.image = '1'
        this.$refs['formItem'].validate((valid) => {})
      },
      submit (formItem) {
        this.Addreceivable(formItem)
      },
      getCategory(project_id){
        this.formItem.project = ''
        this.getCategoryList4(project_id)

      },
    },
    mounted() {
      this.getProjectList4()

    }
  }
</script>
