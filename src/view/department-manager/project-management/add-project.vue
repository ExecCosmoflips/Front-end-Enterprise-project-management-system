<template>
    <Drawer
      title="Create"
      v-model="value3"
      width="720"
      :mask-closable="false"
      :styles="styles"
      :closable="false"
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
        <Button type="primary" @click="addProject">Submit</Button>
      </div>
    </Drawer>
</template>
<script>import { mapState, mapActions } from 'vuex'
export default {
  name: 'AddProject',
  props: {
    value3: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
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
      departmentStaff: state => state.department.departmentStaff
    })
  },
  methods: {
    ...mapActions([
      'handleProjectInfo',
      'handleGetDepartmentStaff',
      'handleEditProject',
      'handleGetAllStaff',
      'handleAddProject'
    ]),
    clickCancle () {
      this.$emit('on-cancle', this.value3)
    },
    addProject () {
      this.handleAddProject(this.formData)
    }
  },
  mounted () {
    this.handleGetDepartmentStaff(1).then()
  }
}
</script>
<style>
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
