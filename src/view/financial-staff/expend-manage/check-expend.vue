<template>
  <Form :model="formItem" :label-width="80">
    <Row style="margin-top: 20px">
      <Col span="8">
        <FormItem label="部门名：">
          <Select v-model="formItem.department" @on-change="getProject(formItem.department)">
            <Option v-for=" item in departmentList " :key="item.department_id" :value="item.department_id" > {{ item.department_name }} </Option>
          </Select>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="项目名：">
          <Select v-model="formItem.project" @on-change="getConfirmExpend(formItem.project)">
            <Option v-for=" item in projectList " :key="item.id" :value="item.id"> {{ item.title }} </Option>
          </Select>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="费用类别：">
          <Select v-model="formItem.category" @on-change="getConfirmExpendInfo(formItem.category)">
            <Option v-for=" item in confirmExpendList " :key="item.confirm_expend_id" :value="item.confirm_expend_id" > {{ item.confirm_expend_category }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Table style="margin-top: 20px" border :columns="columns" :data="data2"></Table>
  </Form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'check-expend',
  data () {
    return {
      formItem: {
        department: '',
        project: '',
        category: ''
      },
      columns: [
        {
          title: '部门',
          key: 'department_name'
        },
        {
          title: '项目',
          key: 'project_title'
        },
        {
          title: '费用名',
          key: 'confirm_expend_title'
        },
        {
          title: '确认费用数目',
          key: 'confirm_expend_num'
        }
      ],
      data2: []
    }
  },
  computed: {
    ...mapState({
      projectList: state => state.advance.projectList,
      departmentList: state => state.advance.departmentList,
      confirmExpendList: state => state.expend.confirmExpendList,
      confirmExpendInfo: state => state.expend.confirmExpendInfo
    })
  },
  methods: {
    ...mapActions([
      'getProjectList',
      'getDepartmentList',
      'getConfirmExpendList',
      'listConfirmExpendInfo'
    ]),
    getProject (department_id) {
      this.formItem.project = ''
      this.getProjectList(department_id)
      this.listConfirmExpendInfo().then(res => {
        this.data2 = this.confirmExpendInfo.filter(item => item['department_id'] === department_id)
      })
    },
    getConfirmExpend (project_id) {
      this.formItem.category = ''
      this.getConfirmExpendList(project_id)
      this.data2 = this.confirmExpendInfo.filter(item => item['project_id'] === project_id)
    },
    getConfirmExpendInfo (confirm_expend_id) {
      this.listConfirmExpendInfo()
      this.data2 = this.confirmExpendInfo.filter(item => item['confirm_expend_id'] === confirm_expend_id)
    }
  },
  mounted () {
    this.getDepartmentList()
    this.listConfirmExpendInfo().then(res => {
      this.data2 = res
    })
  }
}
</script>
