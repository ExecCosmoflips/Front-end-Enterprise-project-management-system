<template>
<div>
  <Card :bordered="false">
    <Divider orientation="left">收入类别</Divider>
    <MyForm status="1" :items="items1"></MyForm>
    <Divider orientation="left">支出类别</Divider>
    <MyForm status="2" :items="items2"></MyForm>
  </Card>

  <Card :bordered="false">
  </Card>
</div>
</template>

<script>
import MyForm from './form-model'
import { getFinancialModel } from '../../../api/department'
import { mapState } from 'vuex'
export default {
  components: {
    MyForm
  },
  name: 'Financial',
  data () {
    return {
      items1: [],
      items2: [],
      index: '1'
    }
  },
  computed: {
    ...mapState({
      projectInfo: state => state.department.projectInfo
    })
  },
  methods: {
  },
  mounted () {
    console.log(this.projectInfo.id)
    getFinancialModel(this.projectInfo.id).then(response => {
      console.log(response.data)
      let data = response.data
      for (let i = 0; i < data.length; i++) {
        if (data[i].status === 1) {
          this.items2.push(data[i])
        } else {
          this.items1.push(data[i])
        }
      }
      console.log(this.items1)
    })
  }
}
</script>

<style scoped>

</style>
