<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="staffs" :columns="columns1" @on-delete="handleDelete"/>
    </Card>
  </div>
</template>
<script>import { mapState, mapActions } from 'vuex'
import Tables from '_c/tables'
export default {
  name: 'staff-list',
  components: {
    Tables
  },
  data () {
    return {
      formItem: {
      },
      value4: false,
      staffs: [],
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      },
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '职位',
          key: 'pos'
        },
        {
          title: '邮箱',
          key: 'email'
        },
        {
          title: '状态',
          key: 'license'
        },
        {
          title: '联系方式',
          key: 'phone'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      departmentStaff: state => state.department.departmentStaff
    })
  },
  methods: {
    ...mapActions([
      'handleGetDepartmentStaff'
    ]
    ),
    viewProjectInfo (id) {
      const route = {
        name: 'project-info',
        params: {
          id
        },
        meta: {
          title: `动态路由-${id}`
        }
      }
      this.$router.push(route)
    }
  },
  mounted () {
    this.handleGetDepartmentStaff(1).then(() => {
      this.staffs = this.departmentStaff
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

  .demo-drawer-profile{
    font-size: 14px;
  }
  .demo-drawer-profile .ivu-col{
    margin-bottom: 12px;
  }
</style>
