<template>
  <div>
    <Table stripe :columns="columns" :data="departmentList"></Table>
  </div>
</template>

<script>import { mapState, mapActions } from 'vuex'
export default {
  name: 'department-list',
  data () {
    return {
      columns: [
        {
          title: '部门名',
          key: 'department_name'
        },
        {
          title: '负责人',
          key: 'department_leader'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      departmentList: state => state.superadmin.departmentList
    })
  },
  methods: {
    ...mapActions([
      'handleGetDepartmentList'
    ]
    )
  },
  mounted () {
    this.handleGetDepartmentList().then(console.log(this.departmentList))
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
