<template>
  <Form :model="formItem" :rules="ruleValidate" :label-width="100" ref="formItem">
    <Row>
      <Col span="16" offset="4">
        <FormItem label="部门名：" style="margin-top: 40px" prop="department">
          <Select v-model="formItem.department" @on-change="getProject(formItem.department)">
            <Option v-for=" item in departmentList " :key="item.department_id" :value="item.department_id" > {{ item.department_name }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="项目名：" prop="project">
          <Select v-model="formItem.project" @on-change="getConfirmExpend(formItem.project)">
            <Option v-for=" item in projectList " :key="item.id" :value="item.id"> {{ item.title }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="费用名：" prop="title">
          <Select v-model="formItem.title">
            <Option v-for=" item in expendList " :key="item.expend_title"
                    :value="item.expend_title" >{{ item.expend_title }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="费用款数：" prop="expend_num">
          <Input v-model="formItem.expend_num" placeholder="请输入费用款数"></Input>
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
                  :insideSrc="formItem.expend_agreement"
                  :src="formItem.expend_agreement"
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
      <Col span="6" offset="10">
        <FormItem>
          <Button type="primary" @click="recordExpend(formItem.project, formItem.title, formItem.expend_num,
        formData, 'formItem')">确 认</Button>
          <Button style="margin-left: 50px" to="./check_expend_page">取 消</Button>
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Cropper from '@/components/cropper'
export default {
  name: 'comfirm-expend',
  components: {
    Cropper
  },
  data () {
    return {
      formItem: {
        department: '',
        project: '',
        title: '',
        expend_num: '',
        expend_agreement: '',
        image: ''
      },
      formData: new FormData(),
      ruleValidate: {
        department: [{
          type: 'number', required: true, message: '请选择部门', trigger: 'change'
        }],
        project: [{
          type: 'number', required: true, message: '请选择项目', trigger: 'change'
        }],
        title: [{
          required: true, message: '请选择费用', trigger: 'change'
        }],
        expend_num: [{
          required: true, message: '请输入确认支出数', trigger: 'blur'
        }],
        image: [{
          required: true, message: '未上传图片', trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    ...mapState({
      projectList: state => state.advance.projectList,
      departmentList: state => state.advance.departmentList,
      expendList: state => state.expend.expendList
    })
  },
  methods: {
    ...mapActions([
      'getProjectList',
      'getDepartmentList',
      'getExpendList',
      'confirmExpend'
    ]),
    getProject (department_id) {
      this.formItem.project = ''
      this.formItem.title = ''
      this.getProjectList(department_id)
    },
    getConfirmExpend (project_id) {
      this.formItem.title = ''
      this.getExpendList(project_id)
    },
    handleCroped (img) {
      this.formData.append('expend_agreement', img)
      this.formItem.image = '1'
      this.$refs['formItem'].validate((valid) => {})
    },
    recordExpend (project_id, confirm_expend_title, confirm_expend_num,
      formData, formItem) {
      this.$refs[formItem].validate((valid) => {
        if (valid) {
          formData.append('project_id', project_id)
          formData.append('confirm_expend_title', confirm_expend_title)
          formData.append('confirm_expend_num', confirm_expend_num)
          this.confirmExpend(formData)
          this.$Message.success('Success!')
          const router = {
            name: 'check_expend_page'
          }
          this.$router.push(router)
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  },
  mounted () {
    this.getDepartmentList()
  }
}
</script>

<style scoped>

</style>
