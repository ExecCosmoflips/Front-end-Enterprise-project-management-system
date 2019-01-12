import { getProjectData
} from '../../api/data'

export default {
  state: {
    incomeList: [],
    expendList: [],
    profitList: []
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
        getProjectData(id).then(response => {
          const { incomeList, expendList } = response.data
          commit('setIncomeList', incomeList)
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
