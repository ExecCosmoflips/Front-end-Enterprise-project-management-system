<template>
  <div>
      <div class="search-con search-con-top">
        <Select v-model="searchKey" class="search-col">
          <Option v-for="item in columns1" v-if="item.key !== 'handle'" :value="item.key" :key="`search-col-${item.key}`">{{ item.title }}</Option>
        </Select>
        <Input @on-change="handleClear" clearable placeholder="输入关键字搜索" class="search-input" v-model="searchValue"/>
        <Button @click="handleSearch" class="search-btn" type="primary"><Icon type="search"/>搜索</Button>
        <Button @click="handleAddStaff" class="search-btn" type="primary" style="float: right"><Icon type="search"/>添加部门人员</Button>
      </div>
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
      formItem: '',
      searchValue: '',
      email: '',
      searchKey: [],
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
      'handleGetDepartmentStaff',
      'handleSendEmail'
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
    },
    handleAddStaff () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.email,
              autofocus: true,
              placeholder: '请输入邮箱地址'
            },
            on: {
              input: (val) => {
                this.email = val
              }
            }
          })
        },
        title: '添加部门人员',
        onOk: () => {
          console.log(this.email)
          this.handleSendEmail(this.email)
        }
      })
    },
    handleClear (e) {
      if (e.target.value === '') this.staffs = this.value
    },
    handleSearch () {
      this.staffs = this.departmentStaff.filter(item => item[this.searchKey].indexOf(this.searchValue) > -1)
    }
  },
  mounted () {
    this.handleGetDepartmentStaff(1).then(() => {
      this.staffs = this.departmentStaff
      console.log(this.departmentStaff)
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
