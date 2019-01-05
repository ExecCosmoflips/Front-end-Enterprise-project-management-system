<template>
  <Tabs value="name1" style="height: 100%">
    <TabPane label="项目内容" name="name1">
      <div style="padding: 15px">
        <Card :bordered="false">
      <p slot="title">
        项目名称
        <a style="float: right" @click="value3 = true">
            aaa
        </a>
      </p>
      <p> 项目介绍</p>
          <Divider/>
      <p>成员信息 </p>
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
<script>
export default {
  name: 'project-info',
  data () {
    return {
      value3: false,
      formData: {
        name: '',
        url: '',
        owner: '',
        type: '',
        approver: '',
        date: '',
        desc: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
