<template>
  <Row :gutter="20" style="margin-top: 5px;">
    <i-col :md="24" :lg="12" style="margin-bottom: 15px;">
      <Card shadow>
        <chart-pie style="height: 220px;" :value="incomePie" :text="title"></chart-pie>
      </Card>
    </i-col>
  </Row>
</template>

<script>
import { ChartPie, ChartBar } from '_c/charts'
import Financial from './financial-model'
export default {
  name: 'PieData',
  components: {
    ChartPie,
    ChartBar,
    Financial
  },
  props: {
    incomePie: {
      type: Array
    },
    title: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
