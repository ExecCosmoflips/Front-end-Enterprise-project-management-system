<template>
  <div>
    <Table border :columns="columns7" :data="data6"></Table>
    <Row type="flex" justify="center" class="code-row-bg">
      <Page :total="100" show-elevator />
    </Row>
    <br/>
    <Row type="flex" justify="center" class="code-row-bg">
      <Button to="/add_staff">添加部门人员</Button>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns7: [
        {
          title: '工号',
          key: 'number'
        },
        {
          title: '姓名',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: '邮箱',
          key: 'email'
        },
        {
          title: '手机号',
          key: 'telephone'
        },
        {
          title: '是否跨部门执行项目',
          key: 'whether'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data6: [
        {
          number: '000001',
          name: '张三',
          email: '1234567@qq.com',
          telephone: 1234567,
          whether: '是'
        },
        {

        },
        {

        },
        {

        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: '个人信息',
        content: `工号：${this.data6[index].number}<br>姓名：${this.data6[index].name}<br>邮箱：${this.data6[index].email}<br>手机号：${this.data6[index].telephone}<br>是否跨部门执行项目：${this.data6[index].whether}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    }
  }
}
</script>
