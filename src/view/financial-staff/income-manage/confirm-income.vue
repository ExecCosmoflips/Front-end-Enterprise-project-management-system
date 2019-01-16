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
          <Select v-model="formItem.project" @on-change="getIncome(formItem.project)">
            <Option v-for=" item in projectList " :key="item.id" :value="item.id"> {{ item.title }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="应收款类别：" prop="receivable_category">
          <Select v-model="formItem.receivable_category" @on-change="getReceivableTitle(formItem.receivable_category)">
            <Option v-for=" item in incomeList " :key="item.receivable_category" :value="item.receivable_category">
              {{ item.receivable_category }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="应收款项：" prop="receivable_title">
          <Select v-model="formItem.receivable_title">
            <Option v-for=" item in receivableCategoryList " :key="item.receivable_title" :value="item.receivable_title">
              {{ item.receivable_title }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="收入数：" prop="confirm_num">
          <Input v-model="formItem.confirm_num" placeholder="请输入确认收入数"></Input>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="开票税率：" prop="tax_rate">
          <Input v-model="formItem.tax_rate" placeholder="请输入开票税率"></Input>
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
                  :insideSrc="formItem.income_agreement"
                  :src="formItem.income_agreement"
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
          <Button type="primary" @click="recordIncome(formItem.project, formItem.receivable_category,
        formItem.receivable_title, formItem.confirm_num,
        formItem.tax_rate, formData, 'formItem')">确 认</Button>
          <Button style="margin-left: 50px" to="./check_income_page">取 消</Button>
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Cropper from '@/components/cropper'
  export default {
    name: 'confirm-income',
    components: {
      Cropper
    },
    data () {
      return {
        formItem: {
          department: '',
          project: '',
          receivable_category: '',
          receivable_title: '',
          confirm_num: '',
          tax_rate: '',
          income_agreement: '',
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
          receivable_category: [{
            type: 'string', required: true, message: '请选择应收类别', trigger: 'change'
          }],
          receivable_title: [{
            type: 'string', required: true, message: '请选择应收款项', trigger: 'change'
          }],
          confirm_num: [{
            required: true, message: '请输入确认收入数', trigger: 'blur'
          }],
          tax_rate: [{
            required: true, message: '请输入开票税率', trigger: 'blur'
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
        receivableCategoryList: state => state.advance.receivableCategoryList,
        incomeList: state => state.income.incomeList
      })
    },
    methods: {
      ...mapActions([
        'getProjectList',
        'getDepartmentList',
        'getIncomeList',
        'confirmIncome',
        'getReceivableCategoryList'
      ]),
      getProject (department_id) {
        this.formItem.project = ''
        this.formItem.receivable_category = ''
        this.formItem.receivable_title = ''
        this.getProjectList(department_id)
      },
      getIncome (project_id) {
        this.formItem.receivable_category = ''
        this.formItem.receivable_title = ''
        this.getIncomeList(project_id)
      },
      getReceivableTitle (receivable_category) {
        this.formItem.receivable_title = ''
        this.getReceivableCategoryList(receivable_category)
      },
      handleCroped (img) {
        this.formData.append('income_agreement', img)
        this.formItem.image = '1'
        this.$refs['formItem'].validate((valid) => {})
      },
      recordIncome (project_id, receivable_id, receivable_title, confirm_num, tax_rate, formData, formItem) {
        this.$refs[formItem].validate((valid) => {
          if (valid) {
            formData.append('project_id', project_id)
            formData.append('receivable_id', receivable_id)
            formData.append('receivable_title', receivable_title)
            formData.append('confirm_num', confirm_num)
            formData.append('tax_rate', tax_rate)
            this.confirmIncome(formData)
            this.$Message.success('Success!')
            const router = {
              name: 'check_income_page'
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
