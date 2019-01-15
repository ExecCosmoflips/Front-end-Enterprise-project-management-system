<template>
  <Form :model="formItem" :label-width="80">

    <FormItem label="选择类别">
      <Select v-model="formItem.category" @on-change="getReceivableInfo(formItem.category)">
        <Option> v-for=" item in categoryList " :key="item.category_id" :value="item.category_id" > {{ item.category_name }} </Option>
      </Select>
    </FormItem>

    <Table style="margin-top: 20px" border :columns="columns" :data="data"></Table>
  </Form>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'check_addreceivable',
    data () {
      return {
        formItem: {

          category: '',

        },

        columns: [
          {
            title: '部门',
            key: 'department_name'
          },
          {
            title: '项目',
            key: 'project_name'
          },
          {
            title: '收入类别',
            key: 'category_name'
          },
          {
            title: '应收标题',
            key: 'title'
          },
          {
            title: '应收数',
            key: 'number'
          }

        ],

        data: []
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.receivable.categoryList,
        receivableInfo: state => state.receivable.receivableInfo
      })
    },
    methods: {
      ...mapActions([
        'getCategoryList',
        'listReceivableInfo'
      ]),
      getReceivableInfo(category_id){

        this.listReceivableInfo()
        this.data = this.receivableInfo.filter(item => item['category_id'] === category_id)

      },

    },
    mounted() {
      this.getCategoryList()
      this.listReceivableInfo().then(res => {
        this.data = res
      })
    }
  }
</script>

<style scoped>

</style>
