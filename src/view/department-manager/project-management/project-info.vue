<template>
  <Tabs value="name1">
    <TabPane label="项目内容" name="name1">
      <div style="padding: 15px">
        <Card :bordered="false">
      <p slot="title">
        {{projectInfo.title}}
        <a style="float: right" @click="clickEdit">
            修改
        </a>
      </p>
      <p> 项目介绍</p>
          {{projectInfo.content}}
          <Divider/>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <p>成员信息 </p>
            <Button type="primary" @click="modal = true">添加</Button>
            <Modal v-model="modal" title="添加项目人员" :loading="loading" @on-ok="ok" @on-cancel="cancel">
              <Table stripe :columns="columns1" :data="projectInfo.staff"></Table>
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
            <chart-bar style="height: 300px;" :value="barData" text="收入统计图"/>
          </Card>
        </i-col>
        <i-col :md="12" :lg="24" style="margin-bottom: 20px;">
          <Card shadow>
            <chart-bar style="height: 300px;" :value="barData" text="支出统计图"/>
          </Card>
        </i-col>
        <i-col :md="12" :lg="24" style="margin-bottom: 20px;">
          <Card shadow>
            <chart-bar style="height: 300px;" :value="barData" text="利润统计图"/>
          </Card>
        </i-col>
      </Row>
    </TabPane>
    <TabPane label="类别明细" name="name3">
      <Row>
        <Col span="5">
          起始日期：<DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="5">
          截止日期：<DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="2">
          <Button type="primary">查询</Button>
        </Col>
      </Row>
      <Row :gutter="20" style="margin-top: 5px;">
        <i-col :md="24" :lg="12" style="margin-bottom: 15px;">
          <Card shadow>
            <chart-pie style="height: 220px;" :value="pieData" text="收入类别"></chart-pie>
          </Card>
        </i-col>
        <i-col :md="24" :lg="12" style="margin-bottom: 15px;">
          <Card shadow>
            <chart-pie style="height: 220px;" :value="pieData" text="支出类别"></chart-pie>
          </Card>
        </i-col>
      </Row>
    </TabPane>
  </Tabs>
</template>
<script>

import { mapState, mapActions } from 'vuex'
import { ChartPie, ChartBar } from '_c/charts'
import { getProjectData,
  getProjectDataPie } from '../../../api/data'

export default {
  name: 'project-info',
  components: {
    ChartPie,
    ChartBar
  },
  data () {
    return {
      modal: false,
      loading: true,
      value3: false,
      formData: {
        name: '',
        url: '',
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
      pieData: [],
      barData: {}
    }
  },
  computed: {
    ...mapState({
      projectInfo: state => state.department.projectInfo,
      departmentStaff: state => state.department.departmentStaff
    })
  },
  methods: {
    ...mapActions([
      'handleProjectInfo',
      'handleGetDepartmentStaff',
      'handleEditProject'
    ]),
    async ok () {
      this.$refs.setGold.validate(async (valid) => {
        if (valid) {
          let res = await this.$ajax.post('/xx/xx', {})
          if (res.cd === 0) {
            // doSomething..
          } else {
            this.$Message.info(res.msg)
          }
        } else {
          // 对话框校验失败，取消loading状态
          this.loading = false
          setTimeout(() => {
            this.$nextTick(() => {
              this.loading = true
            })
          }, 100)
        }
      })
    },
    cancel () {
      // 取消后，重置表单
      this.$refs['setGold'].resetFields()
    },
    editProject (formData) {
      this.handleEditProject(formData).then(() => console.log('ok'))
      this.value3 = false
    },
    clickEdit () {
      this.value3 = true
      this.formData = this.projectInfo
      this.formData.leader = this.projectInfo.leader.id
      console.log(this.projectInfo.leader)
    },
    clickCancle () {
      this.handleProjectInfo(this.$route.params.id)
      this.value3 = false
    }
  },
  mounted () {
    this.handleProjectInfo(1)
    this.barData = getProjectData(1)

    this.pieData = getProjectDataPie(1)
    console.log(this.pieData)
  },

  created () {
    this.handleProjectInfo(this.$route.params.id).then(() => {

    })
    console.log(1212)
    this.handleGetDepartmentStaff(1)
    console.log(this.projectInfo.leader.id)
    console.log(1212)
  }
}
</script>

<style scoped>

</style>
