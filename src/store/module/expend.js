import {
  getConfirmExpendList,
  listConfirmExpendInfo
} from '../../api/expend'
import {
  getDepartmentList,
  getProjectList
} from '../../api/advance'

export default {
  state: {
    departmentList: [],
    projectList: [],
    confirmExpendList: [],
    confirmExpendInfo: []
  },
  mutations: {
    setProjectList (state, projectList) {
      state.projectList = projectList
    },
    setDepartmentList (state, departmentList) {
      state.departmentList = departmentList
    },
    setConfirmExpendList (state, confirmExpendList) {
      state.confirmExpendList = confirmExpendList
    },
    setConfirmExpendInfo (state, confirmExpendInfo) {
      state.confirmExpendInfo = confirmExpendInfo
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
    getConfirmExpendList ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        getConfirmExpendList(project_id).then(response => {
          const data = response.data
          commit('setConfirmExpendList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    listConfirmExpendInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        listConfirmExpendInfo().then(response => {
          const data = response.data
          commit('setConfirmExpendInfo', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
