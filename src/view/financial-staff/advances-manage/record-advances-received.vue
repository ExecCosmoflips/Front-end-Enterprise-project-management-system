<template>
  <Form :model="formItem" :label-width="80">
    <Row>
      <Col span="16" offset="4">
        <FormItem label="部门名：" style="margin-top: 40px">
          <Select v-model="formItem.department" @on-change="getProject(formItem.department)">
            <Option v-for=" item in departmentList " :key="item.department_id" :value="item.department_id"> {{ item.department_name }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="项目名：">
          <Select v-model="formItem.project">
            <Option v-for=" item in projectList " :key="item.id" :value="item.id"> {{ item.title }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="应收款项：">
          <Select v-model="formItem.receivable">
            <Option v-for=" item in receivableList " :key="item.id" :value="item.id"></Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem label="预收款数：">
          <Input v-model="formItem.advance_number" placeholder="请输入预收款数"></Input>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="16" offset="4">
        <FormItem>
          <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            v-model="formItem.advance_agreement">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="96" style="color: #3399ff"></Icon>
              <p>点击选择或拖拽要上传的凭证至此</p>
            </div>
          </Upload>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="6" offset="10">
        <FormItem style="margin-top: 50px">
          <Button type="primary">确 认</Button>
          <Button style="margin-left: 50px">取 消</Button>
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>

<script>import { mapState, mapActions } from 'vuex'
import department from "../../../store/module/department";
export default {
  name: 'record-advances-received',
  data () {
    return {
      formItem: {
        department: '',
        project: '',
        receivable: '',
        advance_number: '',
        advance_agreement: ''
      }
    }
  },
  computed: {
    ...mapState({
      projectList: state => state.advance.projectList,
      departmentList: state => state.advance.departmentList,
    })
  },
  methods: {
    ...mapActions([
      'getProjectList',
      'getDepartmentList'
    ]),
    getProject (department_id) {
      this.getProjectList(department_id)
    }
  },
  mounted () {
    this.getDepartmentList()
  }
}
</script>
