<template>
    <Drawer
      title="Create"
      v-model="value3"
      width="720"
      :mask-closable="false"
      :styles="styles"
      :closable="false"
    >
      <Form :model="formData" :rules="ruleValidate" rel="formData">
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="项目名称" label-position="top" prop="title">
              <Input v-model="formData.title" placeholder="please enter project name" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="负责人" label-position="top" prop="leader">
              <Select v-model="formData.leader" placeholder="please select an owner">
                <Option v-for="item in departmentStaff" :key="item.user" :value="item.user">{{item.name}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="开始时间" label-position="top" prop="begin_time">
              <DatePicker v-model="formData.begin_time" type="date" format="yyyy-MM-dd" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="结束时间" label-position="top" prop="end_time">
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
    },
    department_id: Number
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
      },
      ruleValidate: {
        title: [{
          type: 'string', required: true, message: '项目名不能为空', trigger: 'blur'
        }]
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
      const formData = this.formData
      formData['department_id'] = this.department_id
      this.handleAddProject(this.formData).then(() => {
        this.$emit('on-cancle', this.value3)
      })
    }
  },
  mounted () {
    this.handleGetDepartmentStaff(this.department_id)
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
