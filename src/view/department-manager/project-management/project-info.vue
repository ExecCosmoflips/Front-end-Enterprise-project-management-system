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
          <Row type="flex" justify="space-between" class="code-row-bg">
            <p>成员信息 </p>
            <Button type="primary" @click="modal = true">添加</Button>
            <Modal
              v-model="modal"
              title="添加项目人员"
              :loading="loading"
              @on-ok="ok"
              @on-cancel="cancel">
              <Table stripe :columns="columns1" :data="projectInfo.staff"></Table>
            </Modal>
          </Row>
          <div>
            <ul style="list-style-type:none">
              <li v-for="site in projectInfo.staff">
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
      <Drawer
        title="Create"
        v-model="value3"
        width="720"
        :mask-closable="false"
      >
        <Form :model="formData">
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="Name" label-position="top">
                <Input v-model="formData.name" placeholder="please enter user name" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="Url" label-position="top">
                <Input v-model="formData.url" placeholder="please enter url">
                <span slot="prepend">http://</span>
                <span slot="append">.com</span>
                </Input>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="Owner" label-position="top">
                <Select v-model="formData.owner" placeholder="please select an owner">
                  <Option value="jobs">Steven Paul Jobs</Option>
                  <Option value="ive">Sir Jonathan Paul Ive</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="Type" label-position="top">
                <Select v-model="formData.type" placeholder="please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="Approver" label-position="top">
                <Select v-model="formData.approver" placeholder="please choose the approver">
                  <Option value="jobs">Steven Paul Jobs</Option>
                  <Option value="ive">Sir Jonathan Paul Ive</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="DateTime" label-position="top">
                <DatePicker v-model="formData.date" type="daterange" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="Description" label-position="top">
            <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description" />
          </FormItem>
        </Form>
      </Drawer>
    </TabPane>
    <TabPane label="财务记录" name="name2">标签二的内容
      <Row>
        <Col span="12">
          <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
          <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </TabPane>
    <TabPane label="标签三" name="name3">标签三的内容</TabPane>
  </Tabs>
</template>
<script>import { mapState, mapActions } from 'vuex'
export default {
  name: 'project-info',
  data () {
    return {
      modal: false,
      loading:true,
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
      columns1:[
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
      ]
    }
  },
  computed: {
    ...mapState({
      projectInfo: state => state.department.projectInfo
    })
  },
  methods: {
    ...mapActions([
      'handleProjectInfo'
    ]),
    async ok() {
      this.$refs.setGold.validate( async(valid) => {
        if (valid) {
          let  res =await this.$ajax.post('/xx/xx',{});
          if(res.cd == 0){
            //doSomething..
          }else{
            this.$Message.info(res.msg);
          }
        }else{
          //对话框校验失败，取消loading状态
          this.loading=false;
          setTimeout(() => {
            this.$nextTick(() => {
              this.loading = true;
            });
          }, 100);
        }
      })
    },
    cancel () {
      //取消后，重置表单
      this.$refs['setGold'].resetFields();
    }
  },
  mounted () {
    console.log(12312)
    this.handleProjectInfo(1)
  }
}
</script>

<style scoped>

</style>
