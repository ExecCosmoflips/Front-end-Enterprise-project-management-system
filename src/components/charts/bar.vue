<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
import { off, on } from '@/libs/tools'

echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartBar',
  props: {
    value: Object,
    text: String,
    subtext: String
  },
  watch: {
    value: {
      handler: function (val, oldval) {
        this.option.xAxis.data = Object.keys(this.value)
        this.option.series[0].data = Object.values(this.value)
        this.dom = echarts.init(this.$refs.dom, 'tdTheme')
        this.dom.setOption(this.option, true)
      }
    },
    deep: true,
    immediate: true
  },
  data () {
    return {
      dom: null,
      option: {}
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    }
  },
  mounted () {
    this.$nextTick(() => {
      let xAxisData = Object.keys(this.value)
      let seriesData = Object.values(this.value)
      this.option = {
        title: {
          text: this.text,
          subtext: this.subtext,
          x: 'center'
        },
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          }
        ],
        series: [{
          data: seriesData,
          type: 'bar',
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        }],
        tooltip: {}

      }
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
