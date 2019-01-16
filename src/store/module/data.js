import {
  getProjectDataBar, getProjectDataPie
} from '../../api/data'
import { handlePieData } from '../../libs/util'

export default {
  state: {
    incomeList: {},
    expendList: {},
    profitList: {},
    incomePie: [],
    expendPie: []
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
    },
    setIncomePie (state, incomePie) {
      state.incomePie = incomePie
    },
    setExpendPie (state, expendPie) {
      state.expendPie = expendPie
    }
  },
  actions: {
    handleGetProjectDataList ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        getProjectDataBar(id).then(response => {
          let incomeListBar = {}
          let expendListBar = {}
          let profitListBar = {}
          let { incomeList, expendList } = response.data
          incomeList = incomeList.sort((a, b) => new Date(a.date + '-01') - new Date(b.date + '-01'))
          expendList = expendList.sort((a, b) => new Date(a.date) - new Date(b.date))
          let sumList = expendList.length >= incomeList.length ? expendList : incomeList
          for (let i = 0; i < sumList.length; i++) {
            if (incomeListBar[incomeList[i].date] === undefined) {
              incomeListBar[incomeList[i].date] = 0
            }
            if (expendListBar[incomeList[i].date] === undefined) {
              expendListBar[incomeList[i].date] = 0
            }
          }
          for (let i = 0, len = incomeList.length; i < len; i++) {
            incomeListBar[incomeList[i].date] += incomeList[i].number
          }
          for (let i = 0, len = expendList.length; i < len; i++) {
            expendListBar[expendList[i].date] += expendList[i].number
          }
          for (let i = 0; i < sumList.length; i++) {
            profitListBar[sumList[i].date] = incomeListBar[incomeList[i].date] - expendListBar[incomeList[i].date]
          }
          commit('setIncomeList', incomeListBar)
          commit('setExpendList', expendListBar)
          commit('setProfitList', profitListBar)
          resolve()
        })
      })
    },
    handleGetPieData ({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        getProjectDataPie(data.project_id, data.begin_time, data.end_time).then(response => {
          const { income, expend } = response.data
          commit('setIncomePie', handlePieData(income))
          commit('setExpendPie', handlePieData(expend))
          resolve(data)
        })
      })
    }
  }
}
