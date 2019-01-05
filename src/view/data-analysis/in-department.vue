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
        <Card>
          <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" />
          <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
        </Card>
      </div>



</template>
<script>
  import Tables from '_c/tables'
  import { getTableData } from '@/api/data'
  import CountTo from '_c/count-to'
  export default {
    name: 'in-department',
    components: {
      Tables,
      CountTo
    },
    data () {
      return {

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
