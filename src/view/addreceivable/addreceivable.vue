<template>
  <div>
    <Form :model="formItem" :rules="ruleValidate" :label-width="100" ref="formItem">
      <Row>
        <Col span="16" offset="4">
      <FormItem label="选择项目" >
        <Select v-model="formItem.project_id" @on-change="getCategory(formItem.project_id)">
          <Option v-for=" item in projectList " :key="item.project_id" :value="item.project_id" > {{ item.project_name }}{{item.project_id}} </Option>
        </Select>
      </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4">
      <FormItem label="选择类别" >
        <Select v-model="formItem.category" >
          <Option  v-for=" item in categoryList " :key="item.category_id" :value="item.category_id" > {{ item.category_name }} </Option>
        </Select>
      </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4">
      <FormItem label="应收项标题" aria-setsize="10" prop="title">
        <Input v-model="formItem.title" placeholder="Enter something..."></Input>
      </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4">
      <FormItem label="应收数" prop="number">
        <Input v-model="formItem.number" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="3">
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
        </Col>
      </Row>
      <Row>
        <FormItem>
        <Col span="6" offset="10">
          <Button type="primary" @click="submit(formItem.project_id,formItem.category,formItem.title,formItem.number,formData)">Submit</Button>
          <Button style="margin-left: 8px">Cancel</Button>
        </Col>
        </FormItem>
      </Row>
    </Form>

  </div>

</template>
<script>
import { mapState, mapActions } from 'vuex'
import Cropper from '@/components/cropper'
export default {
  name: 'addreceivable',
  components: {
    Cropper
  },
  data () {
    return {
      formItem: {
        project_id: '',
        category: '',
        title: '',
        number: '',
        project: '',
        agreement: ''
      },
      formData: new FormData(),
      ruleValidate: {
        title: [{
          required: true, message: '请选择应收款项', trigger: 'blur'
        }],
        number: [{
          required: true, message: '请输入确认收入数', trigger: 'blur'
        }],
        image: [{
          required: true, message: '未上传图片', trigger: 'blur'
        }]
      }

    }
  },

  computed: {
    ...mapState({
      categoryList: state => state.addreceivablee.categoryList,
      projectList: state => state.addreceivablee.projectList,
      userId: state => state.user.userId
    })
  },

  methods: {
    ...mapActions([
      'addReceivable',
      'getCategoryList4',
      'getProjectList4'
    ]
    ),
    handleCroped (img) {
      this.formData.append('agreement', img)
      this.formItem.image = '1'
    },
    submit (project_id, category, title, number, formData) {
      formData.append('project_id', project_id)
      formData.append('category_id', category)
      formData.append('title', title)
      formData.append('number', number)
      this.addReceivable(formData).then(res => {
        alert(res.data.info)
      })
    },
    getCategory (project_id) {
      this.formItem.project = ''
      this.getCategoryList4(project_id)
    }
  },
  mounted () {
    this.getProjectList4(this.userId)
  }
}

</script>
