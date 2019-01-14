import {
  getDepartmentList,
  getProjectList
} from '../../api/advance'
import {
  getIncomeList,
  listIncomeInfo
} from '../../api/income'

export default {
  state: {
    departmentList: [],
    projectList: [],
    incomeList: [],
    incomeInfo: []
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
          resolve()
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
    }
  }
}
