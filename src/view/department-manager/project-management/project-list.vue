<template>
  <div>
    <Table stripe :columns="columns1" :data="data1"></Table>
    <Drawer :closable="false" width="640" v-model="value4">
      <p :style="pStyle">人员信息</p>
      <p :style="pStyle">项目负责人</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            姓名: Aresn
          </Col>
          <Col span="12">
            工号: aresn@aresn.com
          </Col>
        </Row>
        <Row>
          <Col span="12">
            部门: BeiJing
          </Col>
          <Col span="12">
            职位: China
          </Col>
        </Row>
        <Row>
          <Col span="12">
            邮箱: admin@aresn.com
          </Col>
          <Col span="12">
            联系方式: +86 18888888888
          </Col>
        </Row>
        Message: Hello, Developer
      </div>
      <Divider />
      <p :style="pStyle">项目成员</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            姓名: Aresn
          </Col>
          <Col span="12">
            工号: aresn@aresn.com
          </Col>
        </Row>
        <Row>
          <Col span="12">
            部门: BeiJing
          </Col>
          <Col span="12">
            职位: China
          </Col>
        </Row>
        <Row>
          <Col span="12">
            邮箱: admin@aresn.com
          </Col>
          <Col span="12">
            联系方式: +86 18888888888
          </Col>
        </Row>
      </div>
      <Divider />
      <p :style="pStyle">Contacts</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            Email: admin@aresn.com
          </Col>
          <Col span="12">
            Phone Number: +86 18888888888
          </Col>
        </Row>
        <Row>
          <Col span="12">
            GitHub: <a href="https://github.com/iview/iview" target="_blank">https://github.com/iview/iview</a>
          </Col>
        </Row>
        </div>
    </Drawer>
  </div>
</template>
<script>
export default {
  name: 'project-list',
  data () {
    return {
      value4: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      },
      columns1: [
        {
          title: '标题',
          key: 'my_title',
          render: (h, params) => {
            return h('a', {
              class: 'myclass',
              on: {
                click: () => {
                  alert('1')
                }
              }
            }, 'View')
          }
        },
        {
          title: '负责人',
          key: 'principal',
          render: (h, params) => {
            return h('a', {
              class: 'myclass',
              on: {
                click: () => {
                  this.value4 = true
                }
              }
            }, 'A')
          }
        },
        {
          title: '开始',
          key: 'start'
        },
        {
          title: '结束',
          key: 'end'
        }
      ],
      data1: [
        {
          my_title: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          my_title: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          my_title: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
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
