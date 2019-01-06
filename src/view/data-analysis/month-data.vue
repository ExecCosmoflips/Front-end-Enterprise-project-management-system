<template>
  <div ref="dom"></div>
</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
  export default {
    name: 'serviceRequests',
    data () {
      return {
        dom: null
      }
    },
    methods: {
      resize () {
        this.dom.resize()
      }
    },
    mounted () {
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          top: '3%',
          left: '1.2%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '收入和',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {
                color: '#0C17A6'
              } },
            data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230]
          },
          {
            name: '成本和',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {
                color: '#4608A6'
              } },
            data: [257, 358, 278, 234, 290, 330, 310, 358, 278, 234, 290, 330]
          },
          {
            name: '利润和',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {
                color: '#10A6FF'
              } },
            data: [379, 268, 354, 269, 310, 478, 358, 268, 354, 269, 310, 478]
          },

        ]
      }
      this.$nextTick(() => {
        this.dom = echarts.init(this.$refs.dom)
        this.dom.setOption(option)
        on(window, 'resize', this.resize)
      })
    },
    beforeDestroy () {
      off(window, 'resize', this.resize)
    }
  }
</script>
