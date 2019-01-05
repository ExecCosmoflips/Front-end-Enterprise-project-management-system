<template>
  <Tabs type="card" style="height: 100%">
    <TabPane label="进行中的项目">
      <Card>
        <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns1" @on-delete="handleDelete"/>
        <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
      </Card>
    </TabPane>
    <TabPane label="已关闭的项目">
      <Row>
        <Col span="12">
          <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
          <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
        </Col>
      </Row>
      <Card>
        <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
        <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
      </Card>
    </TabPane>
  </Tabs>
</template>
<script>
  import Tables from '_c/tables'
  import { getTableData } from '@/api/data'
  export default {
    name: 'in-program',
    components: {
      Tables
    },
    data () {
      return {
        columns: [
          {title: '序号', key: 'id', sortable: true},
          {title: '项目名', key: 'department', editable: true},
          {title: '负责人', key: 'manager', editable: true},
          {
            title: '项目营收',
            key: 'handle',
            button: [
              (h, params, vm) => {
                return h('Poptip', {
                  props: {
                    confirm: true,
                    title: '离开本页?'
                  },
                  on: {
                    'on-ok': () => {
                      vm.$emit('on-delete', params)
                      vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                    }
                  }
                }, [
                  h('Button', '查看')
                ])
              }
            ]

          }

        ],
        columns1: [
          {title: '序号', key: 'id', sortable: true},
          {title: '部门名', key: 'department', editable: true},
          {title: '负责人', key: 'manager', editable: true},
          {
            title: '部门项目',
            key: 'handle',
            button: [
              (h, params, vm) => {
                return h('Poptip', {
                  props: {
                    confirm: true,
                    title: '离开本页?'
                  },
                  on: {
                    'on-ok': () => {
                      vm.$emit('on-delete', params)
                      vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                    }
                  }
                }, [
                  h('Button', '查看')
                ])
              }
            ]

          }

        ],
        tableData: []
      }
    },
    methods: {
      handleDelete (params) {
        console.log(params)
      },
      exportExcel () {
        this.$refs.tables.exportCsv({
          filename: `table-${(new Date()).valueOf()}.csv`
        })
      }
    },
    mounted () {
      getTableData().then(res => {
        this.tableData = res.data
      })
    }
  }
</script>

<style scoped>

</style>
