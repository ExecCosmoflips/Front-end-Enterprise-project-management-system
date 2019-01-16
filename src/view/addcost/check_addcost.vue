<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="选择项目">
      <Select v-model="formItem.project" @on-change="getCategory(formItem.project)">
        <Option v-for=" item in projectList " :key="item.project_id" :value="item.project_id" > {{ item.project_name }} </Option>
      </Select>
    </FormItem>
    <FormItem label="选择类别">
      <Select v-model="formItem.category" @on-change="getExpendInfo(formItem.category)">
        <Option  v-for=" item in categoryList " :key="item.category_id" :value="item.category_id" > {{ item.category_name }} </Option>
      </Select>
    </FormItem>

    <Table style="margin-top: 20px" border :columns="columns" :data="data"></Table>
  </Form>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'check_addcost',
    data () {
      return {
        formItem: {
          project:'',
          category: '',

        },

        columns: [

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
        categoryList: state => state.check_expend.categoryList,
        expendInfo: state => state.check_expend.expendInfo,
        projectList: state => state.check_expend.projectList
      })
    },
    methods: {
      ...mapActions([
        'getProjectList',
        'getCategoryList',
        'listExpendInfo',

      ]),
      getCategory(project_id){
        this.formItem.project = ''
        this.getCategoryList(project_id)
        this.data = this.expendInfo.filter(item => item['project_id'] === project_id)
      },
      getExpendInfo(category_id){
        this.formItem.category = ''
        this.listExpendInfo()
        this.data = this.expendInfo.filter(item => item['category_id'] === category_id)

      },

    },


    mounted() {
      this.getProjectList()
      this.listExpendInfo().then(res => {
        this.data = res
      })
    }
  }
</script>

<style scoped>

</style>
