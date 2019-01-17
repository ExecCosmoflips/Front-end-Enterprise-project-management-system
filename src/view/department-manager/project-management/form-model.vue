<template>
  <Form ref="formExpend" :model="formDynamic" :label-width="80" style="width: 500px">
    <FormItem
      v-for="(item, index) in formDynamic.items"
      v-if="item.status"
      :key="index"
      :label="title"
        >
      <Row>
        <Col span="8">
          <Input type="text" v-model="item.name" placeholder="Enter something..."></Input>
        </Col>
        <Col span="3" offset="1">
          <label>预估费用</label>
        </Col>
        <Col span="8" >
          <Input v-model.number="item.number" type="number" placeholder="Enter something..."></Input>
        </Col>
        <Col span="3" offset="1">
          <Button @click="handleRemove(index)">Delete</Button>
        </Col>
      </Row>
    </FormItem>
    <FormItem>
      <Row>
        <Col span="12">
          <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>
        </Col>
      </Row>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
      <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>

<script>import axios from '@/libs/api.request'
import { mapState } from 'vuex'
export default {
  name: 'MyForm',
  props: {
    status: String,
    items: Array,
    title: String
  },
  data () {
    return {
      index: 0,
      formDynamic: {
        items: this.items
      }
    }
  },
  computed: {
    ...mapState({
      projectInfo: state => state.department.projectInfo
    })
  },
  methods: {
    handleSubmit (name) {
      let data = this.formDynamic.items
      axios.request({
        url: 'add_financial',
        params: {
          data,
          project_id: this.projectInfo.id
        },
        method: 'get'
      }).then(this.$Message.success('Success!'))
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    handleAdd () {
      this.index++
      this.formDynamic.items.push({
        id: 0,
        name: '',
        number: '',
        status: this.status
      })
    },
    handleRemove (index) {
      this.formDynamic.items[index].status = 0
    }
  }
}
</script>

<style scoped>

</style>
