<template>
<div>
  <Card :bordered="false">
    <Divider orientation="left">收入类别</Divider>
    <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 500px">
      <FormItem
        v-for="(item, index) in formDynamic.items"
        v-if="item.status"
        :key="index"
        :label="'Item ' + item.index"
        :prop="'items.' + index + '.value'"
        :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
        <Row>
          <Col span="9">
            <Input type="text" v-model="item.category" placeholder="Enter something..."></Input>
          </Col>
          <Col span="9" offset="1">
            <Input v-model.number="number" type="number" placeholder="Enter something..."></Input>
          </Col>
          <Col span="4" offset="1">
            <Button @click="handleRemove(index)">Delete</Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Row>
          <Col span="19">
            <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit(formDynamic)">Submit</Button>
        <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </Card>
</div>
</template>

<script>
export default {
  name: 'Financial',
  data () {
    return {
      index: 1,
      formDynamic: {
        items: [
          {
            category: '',
            number: 0,
            index: 1,
            status: 1
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      console.log(name)
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    handleAdd () {
      this.index++
      this.formDynamic.items.push({
        value: '',
        value2: '',
        index: this.index,
        status: 1
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
