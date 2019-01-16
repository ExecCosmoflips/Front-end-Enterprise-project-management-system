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
          <Select v-model="formItem.project" @on-change="getAdvanceTitle(formItem.project)">
            <Option v-for=" item in projectList " :key="item.id" :value="item.id"> {{ item.title }} </Option>
          </Select>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="应收款项：">
          <Select v-model="formItem.receivable" @on-change="getAdvanceInfo(formItem.receivable, formItem.project)">
            <Option v-for=" item in advanceTitle " :key="item.advance_title" :value="item.advance_title">
              {{ item.advance_title }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Table style="margin-top: 20px" border :columns="columns1" :data="data1"></Table>
  </Form>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'check-advances-received',
    data () {
      return {
        formItem: {
          department: '',
          project: '',
          receivable: ''
        },
        columns1: [
          {
            title: '部门',
            key: 'department_name'
          },
          {
            title: '项目',
            key: 'project_title'
          },
          {
            title: '应收款项',
            key: 'receivable_title'
          },
          {
            title: '预收款数',
            key: 'advance_num'
          }
        ],
        data1: []
      }
    },
    computed: {
      ...mapState({
        projectList: state => state.advance.projectList,
        departmentList: state => state.advance.departmentList,
        advanceTitle: state => state.advance.advanceTitle,
        advanceInfo: state => state.advance.advanceInfo
      })
    },
    methods: {
      ...mapActions([
        'getProjectList',
        'getDepartmentList',
        'getAdvanceTitleList',
        'listAdvanceInfo'
      ]),
      getProject (department_id) {
        this.formItem.project = ''
        this.formItem.receivable = ''
        this.getProjectList(department_id)
        this.listAdvanceInfo().then(res => {
          this.data1 = this.advanceInfo.filter(item => item['department_id'] === department_id)
        })
      },
      getAdvanceTitle (project_id) {
        this.formItem.receivable = ''
        this.getAdvanceTitleList(project_id)
        this.listAdvanceInfo().then(res => {
          this.data1 = this.advanceInfo.filter(item => item['project_id'] === project_id)
        })
      },
      getAdvanceInfo (advance_title, project_id) {
        this.listAdvanceInfo()
        this.data1 = this.advanceInfo.filter(item => item['receivable_title'] === advance_title &&
          item['project_id'] === project_id)
      }
    },
    mounted () {
      this.getDepartmentList()
      this.listAdvanceInfo().then(res => {
        this.data1 = res
      })
    }
  }
</script>
