<template>
<div>
  <Row :gutter="14" style="margin-top: 14px; ">
  <i-col span="8" class="padding-left-10">
    <Card>
      <Row type="flex" justify="center" align="middle" class="countto-page-row">
        <div class="count-to-con">
          <count-to :simplify="true" :unit="unit" :end="39800000" count-class="count-text" unit-class="unit-class">
            <span class="slot-text" slot="left">收入和：39800000&nbsp;=>&nbsp;</span>
          </count-to>
        </div>
      </Row>
    </Card>
  </i-col>
  <i-col span="8" class="padding-left-10">
    <Card>

      <Row type="flex" justify="center" align="middle" class="countto-page-row">
        <div class="count-to-con">
          <count-to :simplify="true" :unit="unit" :end="39800000" count-class="count-text" unit-class="unit-class">
            <span class="slot-text" slot="left">成本和：39800000&nbsp;=>&nbsp;</span>
          </count-to>
        </div>
      </Row>
    </Card>
  </i-col>
  <i-col span="8" class="padding-left-10">
    <Card>
      <Row type="flex" justify="center" align="middle" class="countto-page-row">
        <div class="count-to-con">
          <count-to :simplify="true" :unit="unit" :end="39800000" count-class="count-text" unit-class="unit-class">
            <span class="slot-text" slot="left">毛利润和：39800000&nbsp;=>&nbsp;</span>
          </count-to>
        </div>
      </Row>
    </Card>
   </i-col>
  </Row>
  <Row>
    <Card shadow>
      <example style="height: 350px;"/>
    </Card>
  </Row>
</div>
</template>

<script>
  import Tables from '_c/tables'
  import { getTableData } from '@/api/data'
  import { on, off } from '@/libs/tools'
  import InforCard from '_c/info-card'
  import CountTo from '_c/count-to'
  import { ChartPie, ChartBar } from '_c/charts'
  import Example from './month-data.vue'
  export default {
    name: 'serviceRequests',
    components: {
      InforCard,
      CountTo,
      ChartPie,
      ChartBar,
      Example,
      Tables,
      CountTo
    },
    data () {
      return {
        dom: null,

        end: 0,
        unit: [[3, '千多'], [4, '万多'], [5, '十万多']],
        unit2: [[1, '十多'], [2, '百多'], [3, '千多'], [4, '万多'], [5, '十万多'], [6, '百万多'], [7, '千万多'], [8, '亿多']],
        asynEndVal: 487,
        integratedEndVal: 3,
        columns: [
          {title: 'Name', key: 'name', sortable: true},
          {title: 'Email', key: 'email', editable: true},
          {title: 'Position', key: 'position'},
        ],
        tableData: []
      }
    },
    methods: {
      resize () {
        this.dom.resize()
      },

    beforeDestroy () {
      off(window, 'resize', this.resize)
    },

    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    },
    init () {
      setInterval(() => {
        this.asynEndVal += parseInt(Math.random() * 20)
        this.integratedEndVal += parseInt(Math.random() * 30)
      }, 2000)
    }
    },
    mounted () {
      getTableData().then(res => {
        this.tableData = res.data
      })
      this.init()
    }
  }
</script>
<style lang="less">
  .count-style{
    font-size: 50px;
  }
  @baseColor: ~"#dc9387";
  .countto-page-row{
    height: 200px;
  }
  .count-to-con{
    display: block;
    width: 100%;
    text-align: center;
  }
  .count-text{
    font-size: 50px;
    color: @baseColor;
  }
  .slot-text{
    font-size: 22px;
  }
  .unit-class{
    font-size: 30px;
    color: @baseColor;
  }
</style>
