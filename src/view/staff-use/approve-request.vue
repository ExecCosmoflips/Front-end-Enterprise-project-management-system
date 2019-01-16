<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="staffRequest" :columns="columns" @on-delete="handleDelete"/>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name',
          sortable: true,
          render: (h, params) => {
            return h('a', {
              class: 'myclass',
              on: {
                click: () => {
                  console.log(123)
                }
              }
            }, params.row.staff.profile.name)
          }
        },
        {
          title: '项目名',
          key: 'project',
          render: (h, params) => {
            return h('a', {
              class: 'myclass',
              on: {
                click: () => {
                  console.log(123)
                }
              }
            }, params.row.project.title)
          }
        },
        {
          title: '请求发起部门',
          key: 'department',
          render: (h, params) => {
            return h('a', {
              class: 'myclass',
              on: {
                click: () => {
                }
              }
            }, params.row.project.department.name)
          }
        },
        {
          title: '批准',
          key: 'handle',
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要批准吗?'
                },
                on: {
                  'on-ok': () => {
                    this.handleResolveRequest(params.row.id).then()
                  }
                }
              }, [
                h('Button', '批准')
              ])
            }
          ]
        }
      ],
      tableData: []
    }
  },
  computed: {
    ...mapState({
      staffRequest: state => state.department.staffRequest
    })
  },
  methods: {
    ...mapActions([
      'handleGetStaffRequest',
      'handleResolveRequest'
    ]),
    handleDelete (params) {
      console.log(params)
    }
  },
  mounted () {
    this.handleGetStaffRequest().then(() => {
      console.log(this.staffRequest)
    })
  }
}
</script>

<style >
  .myclass {
    color: #000c17;
  }
  .myclass:hover {
    color: #348EED;
  }
</style>
