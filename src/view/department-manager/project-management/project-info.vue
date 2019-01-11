<template>
  <Tabs value="name1" style="height: 100%">
    <TabPane label="项目内容" name="name1">
      <div style="padding: 15px">
        <Card :bordered="false">
      <p slot="title">
        {{projectInfo.title}}
        <a style="float: right" @click="value3 = true">
            修改
        </a>
      </p>
      <p> 项目介绍</p>
          {{projectInfo.content}}
          <Divider/>
      <p>成员信息 </p>
          {{projectInfo.staff}}
    </Card>
      </div>
      <Drawer
        title="Create"
        v-model="value3"
        width="720"
        :mask-closable="false"
        >
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
                <DatePicker v-model="formData.begin_time" type="date" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="结束时间" label-position="top">
                <DatePicker v-model="formData.end_time" type="date" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="项目内容" label-position="top">
            <Input type="textarea" v-model="formData.content" :rows="6" placeholder="please enter the description" />
          </FormItem>
        </Form>
        <div class="demo-drawer-footer">
          <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
          <Button type="primary" @click="value3 = false">Submit</Button>
        </div>
      </Drawer>
    </TabPane>
    <TabPane label="财务记录" name="name2">标签二的内容

    </TabPane>
    <TabPane label="标签三" name="name3">标签三的内容</TabPane>
  </Tabs>
</template>
<script>import { mapState, mapActions } from 'vuex'
export default {
  name: 'project-info',
  data () {
    return {
      value3: false,
      formData: {
        title: '',
        leader: '',
        begin_time: '',
        end_time: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapState({
      projectInfo: state => state.department.projectInfo,
      id: state => state.department.id,
      departmentStaff: state => state.department.departmentStaff
    })
  },
  methods: {
    ...mapActions([
      'handleProjectInfo',
      'handleEditProject',
      'handleGetDepartmentStaff'
    ]),
    EditProject (formData) {
      this.handleEditProject(formData)
    }
  },

  created () {
    this.handleProjectInfo(this.$route.params.id).then(() => {
      this.formData = this.projectInfo
      this.formData.leader = this.projectInfo.leader.id
    })
    this.handleGetDepartmentStaff(1)
  }
}
</script>

<style scoped>
  .demo-drawer-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
</style>
