<template>
  <Tabs value="name1">
    <TabPane label="项目内容" name="name1">
      <div style="padding: 15px">
        <Card :bordered="false">
      <p slot="title" style="height: 32px; line-height: 32px">
        <label style="float: left">{{projectInfo.title}}</label>
        <a style="float: left; margin-left: 20px" @click="clickEdit">
            修改
        </a>
        <Button type="primary" style="float: right" @click="handleCloseProject" v-if="projectInfo.status === 1">关闭项目</Button>
        <label v-if="projectInfo.status !== 1" style="color: red; float: right"> 已关闭</label>
      </p>
      <p> 项目介绍</p>
          {{projectInfo.content}}
          <Divider/>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <p>成员信息 </p>
            <Button type="primary" @click="addProjectStaff">添加</Button>
            <Modal v-model="modal" title="添加项目人员" :loading="loading" @on-ok="ok" @on-cancel="cancel">
              <Transfer
                :data="allStaff"
                :target-keys="projectStaff"
                filterable
                :filter-method="filterMethod"
                :render-format="render"
                :titles="titles"
                @on-change="handleChange"
              ></Transfer>
            </Modal>
          </Row>
          <div>
            <ul style="list-style-type:none">
              <li v-for="site in projectInfo.staff" :key="site.id">
                <Row type="flex" justify="space-between" class="code-row-bg">
                  <Col span="4">姓名：{{ site.profile.name }}</Col>
                  <Col span="4">部门编号：{{ site.profile.department_id }}</Col>
                  <Col span="4">权限：{{ site.profile.access }}</Col>
                  <Col span="4">部门名：{{ site.profile.department_name }}</Col>
                </Row>
              </li>
            </ul>
          </div>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <p>部门外成员 </p>
            <Button type="primary" @click="addProjectOutStaff">添加</Button>
            <Modal v-model="modal1" title="添加项目人员" :loading="loading" @on-ok="ok" @on-cancel="cancel">
              <Transfer
                :data="allStaff"
                :target-keys="projectStaff"
                filterable
                :filter-method="filterMethod"
                :render-format="render"
                :titles="titles"
                @on-change="handleOutChange"
              ></Transfer>
            </Modal>
          </Row>
          <div>
            <ul style="list-style-type:none">
              <li v-for="site in projectInfo.out_staff" :key="site.id">
                <Row type="flex" justify="space-between" class="code-row-bg">
                  <Col span="4">姓名：{{ site.profile.name }}</Col>
                  <Col span="4">部门编号：{{ site.profile.department_id }}</Col>
                  <Col span="4">权限：{{ site.profile.access }}</Col>
                  <Col span="4">部门名：{{ site.profile.department_name }}</Col>
                </Row>
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <Drawer title="Create" v-model="value3" width="720" :mask-closable="false">
        <Form :model="formData">
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目名称" label-position="top">
                <Input v-model="formData.title" placeholder="please enter project name" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="负责人" label-position="top">
                <Select v-model="formData.leader" placeholder="please select an owner">
                  <Option v-for="item in departmentStaff" :key="item.user" :value="item.user">{{item.name}} {{item.user}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="开始时间" label-position="top">
                <DatePicker v-model="formData.begin_time" type="date" format="yyyy-MM-dd" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="结束时间" label-position="top">
                <DatePicker v-model.lazy="formData.end_time" type="date" format="yyyy-MM-dd" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="项目内容" label-position="top">
            <Input type="textarea" v-model.lazy="formData.content" :rows="6" placeholder="please enter the description" />
          </FormItem>
        </Form>
        <div class="demo-drawer-footer">
          <Button style="margin-right: 8px" @click="clickCancle">Cancel</Button>
          <Button type="primary" @click=editProject(formData)>Submit</Button>
        </div>
      </Drawer>
    </TabPane>
    <TabPane label="财务记录" name="name2">
      <Row :gutter="20" style="margin-top: 3px;">
        <i-col :md="12" :lg="24" style="margin-bottom: 20px;">
          <Card shadow>
            <chart-bar style="height: 300px;" :value="incomeList" text="收入统计图"/>
          </Card>
        </i-col>
        <i-col :md="12" :lg="24" style="margin-bottom: 20px;">
          <Card shadow>
            <chart-bar style="height: 300px;" :value="expendList" text="支出统计图"/>
          </Card>
        </i-col>
        <i-col :md="12" :lg="24" style="margin-bottom: 20px;">
          <Card shadow>
            <chart-bar style="height: 300px;" :value="profitList" text="利润统计图"/>
          </Card>
        </i-col>
      </Row>
    </TabPane>
    <TabPane label="类别明细" name="name3">
      <Row>
        <Col span="8">
          起始日期：<DatePicker type="date" format="yyyy-MM-dd" v-model="begin_time" placeholder="Select date" style="width: 200px" ></DatePicker>
        </Col>
        <Col span="8">
          截止日期：<DatePicker type="date" format="yyyy-MM-dd" v-model="end_time" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="4">
          <Button type="primary" @click="queryByTime">查询</Button>
        </Col>
      </Row>
      <PieData :incomePie="incomePie" :project_id="this.$route.params.id" title="收入类别"></PieData>
      <PieData :incomePie="expendPie" :project_id="this.$route.params.id" title="支出类别"></PieData>
    </TabPane>
    <TabPane label="财务模型" name="name4"><financial :project_id="this.$route.params.id"></financial></TabPane>
  </Tabs>
</template>
<script>

import { mapState, mapActions } from 'vuex'
import { ChartPie, ChartBar } from '_c/charts'
import Financial from './financial-model'
import { closeProject } from '../../../api/department'
import PieData from './pie-data'

export default {
  name: 'project-info',
  components: {
    ChartPie,
    ChartBar,
    Financial,
    PieData
  },
  data () {
    return {
      begin_time: '',
      end_time: '',
      titles: ['其他人员', '项目人员'],
      modal: false,
      modal1: false,
      outModal: false,
      outLoading: true,
      loading: true,
      value3: false,
      formData: {
        name: '',
        owner: '',
        type: '',
        approver: '',
        date: '',
        desc: ''
      },
      columns1: [
        {
          title: '标题',
          key: 'id'
        },
        {
          title: '负责人',
          key: 'principal'
        },
        {
          title: '开始',
          key: 'begin_time'
        },
        {
          title: '结束',
          key: 'end_time'
        }
      ],
      incomeBar: [],
      expendBar: [],
      profitBar: [],
      allStaff: [],
      projectStaff: [],
      outStaff: [],
      projectOutStaff: []
    }
  },
  computed: {
    ...mapState({
      departmentId: state => state.user.department_id,
      projectInfo: state => state.department.projectInfo,
      departmentStaff: state => state.department.departmentStaff,
      incomeList: state => state.data.incomeList,
      expendList: state => state.data.expendList,
      profitList: state => state.data.profitList,
      incomePie: state => state.data.incomePie,
      expendPie: state => state.data.expendPie
      // allStaff: state => state.department.allStaff,
      // projectStaff: state => state.department.projectStaff
    })
  },
  methods: {
    ...mapActions([
      'handleProjectInfo',
      'handleGetDepartmentStaff',
      'handleEditProject',
      'handleGetAllStaff',
      'handleChangeStaff',
      'handleGetProjectDataList',
      'handleGetPieData',
      'handleGetOutStaff',
      'handleChangeOutStaff'
    ]),
    addProjectStaff () {
      this.handleGetAllStaff(this.$route.params.id).then((res) => {
        this.modal = true
        this.allStaff = res.all_staff
        this.projectStaff = res.project_staff
      })
    },
    addProjectOutStaff () {
      this.handleGetOutStaff(this.$route.params.id).then((res) => {
        this.modal1 = true
        this.allStaff = res.all_staff
        this.projectStaff = res.project_staff
      })
    },
    async ok () {
      console.log(this.departmentStaff)
    },
    cancel () {
    },
    editProject (formData) {
      this.handleEditProject(formData).then(() => console.log('ok'))
      this.value3 = false
    },
    clickEdit () {
      this.value3 = true
      this.formData = this.projectInfo
      this.formData.leader = this.projectInfo.leader.id
    },
    clickCancle () {
      this.value3 = false
    },
    filterMethod (data, query) {
      return data.name.indexOf(query) > -1
    },
    render (item) {
      return item.name
    },
    handleChange (newTargetKeys, direction, moveKeys) {
      this.projectStaff = newTargetKeys
      const data = {
        'projectStaff': newTargetKeys,
        'direction': direction,
        'moveKeys': moveKeys
      }
      this.handleChangeStaff(data)
    },
    handleOutChange (newTargetKeys, direction, moveKeys) {
      this.projectStaff = newTargetKeys
      const data = {
        'projectStaff': newTargetKeys,
        'direction': direction,
        'moveKeys': moveKeys
      }
      this.handleChangeOutStaff(data)
    },

    handleCloseProject () {
      closeProject(this.projectInfo.id).then(() => {
        this.projectInfo.status = 0
      })
    },
    queryByTime () {
      const data = {
        project_id: this.$route.params.id,
        begin_time: this.begin_time,
        end_time: this.end_time
      }
      this.handleGetPieData(data)
    }
  },
  mounted () {
    this.handleProjectInfo(this.$route.params.id)
    this.handleGetProjectDataList(this.$route.params.id)
    this.handleGetPieData({
      project_id: this.$route.params.id,
      begin_time: '',
      end_time: ''
    })
    this.handleGetDepartmentStaff(this.departmentId)
  }
}
</script>

<style scoped>

</style>
