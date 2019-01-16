import {
  getDepartmentList,
  getProjectList
} from '../../api/advance'
import {
  getIncomeList,
  listIncomeInfo,
  confirmIncome,
  getIncomeTitleList,
  getReceivableCategoryListForIncome
} from '../../api/income'

export default {
  state: {
    departmentList: [],
    projectList: [],
    incomeList: [],
    incomeTitleList: [],
    incomeInfo: [],
    receivableCategoryList: []
  },
  mutations: {
    setProjectList (state, projectList) {
      state.projectList = projectList
    },
    setDepartmentList (state, departmentList) {
      state.departmentList = departmentList
    },
    setIncomeList (state, incomeList) {
      state.incomeList = incomeList
    },
    setIncomeInfo (state, incomeInfo) {
      state.incomeInfo = incomeInfo
    },
    setIncomeTitleList (state, incomeTitleList) {
      state.incomeTitleList = incomeTitleList
    },
    setReceivableCategoryList (state, receivableCategoryList) {
      state.receivableCategoryList = receivableCategoryList
    }
  },
  actions: {
    getDepartmentList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getDepartmentList().then(response => {
          const data = response.data
          commit('setDepartmentList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getProjectList ({ state, commit }, department_id) {
      return new Promise((resolve, reject) => {
        getProjectList(department_id).then(response => {
          const data = response.data
          commit('setProjectList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getIncomeList ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        getIncomeList(project_id).then(response => {
          const data = response.data
          commit('setIncomeList', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    listIncomeInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        listIncomeInfo().then(response => {
          const data = response.data
          commit('setIncomeInfo', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    confirmIncome ({ state }, formData) {
      return new Promise((resolve, reject) => {
        confirmIncome(formData).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getIncomeTitleList ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        getIncomeTitleList(project_id).then(response => {
          const data = response.data
          commit('setIncomeTitleList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getReceivableCategoryList ({ state, commit }, receivable_category) {
      return new Promise((resolve, reject) => {
        getReceivableCategoryListForIncome(receivable_category).then(response => {
          const data = response.data
          commit('setReceivableCategoryList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
