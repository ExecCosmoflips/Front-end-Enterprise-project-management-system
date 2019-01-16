import {
  getProjectData, getProjectDataBar, getProjectDataPie
} from '../../api/data'
import Mock from 'mockjs'

export default {
  state: {
    incomeList: {},
    expendList: {},
    profitList: {}
  },
  mutations: {
    setIncomeList (state, incomeList) {
      state.incomeList = incomeList
    },
    setExpendList (state, expendList) {
      state.expendList = expendList
    },
    setProfitList (state, profitList) {
      state.profitList = profitList
    }
  },
  actions: {
    handleGetProjectDataList ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        getProjectDataBar(id).then(response => {
          console.log(response.data)
          let barData = {}
          const { incomeList, expendList } = response.data
          for (let i = 0, len = incomeList.length; i < len; i++) {
            barData[incomeList[i].date] = incomeList[i].number
            // this.barData[this.expendList[i].date] = this.expendList[i].number
            // this.barData[this.profitList[i].date] = this.profitList[i].number
          }
          console.log(barData)
          commit('setIncomeList', barData)
          commit('setExpendList', expendList)
          console.log(incomeList)
          console.log(expendList)
          let profitList = []
          for (let i = 0, len = incomeList.length; i < len; i++) {
            profitList.push(
              {
                'date': incomeList[i].date,
                'number': incomeList[i].number - expendList[i].number
              })
          }
          commit('setProfitList', profitList)
          resolve()
        })
      })
    }
  }
}
