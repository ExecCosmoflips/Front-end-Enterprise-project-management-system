import {
  getDepartmentList,
  getProjectList,
  getReceivableList,
  listAdvanceInfo
} from '../../api/advance'

export default {
  state: {
    departmentList: [],
    projectList: [],
    receivableList: [],
    advanceInfo: []
  },
  mutations: {
    setProjectList (state, projectList) {
      state.projectList = projectList
    },
    setDepartmentList (state, departmentList) {
      state.departmentList = departmentList
    },
    setReceivableList (state, receivableList) {
      state.receivableList = receivableList
    },
    setAdvanceInfo (state, advanceInfo) {
      state.advanceInfo = advanceInfo
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
    getReceivableList ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        getReceivableList(project_id).then(response => {
          const data = response.data
          commit('setReceivableList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    listAdvanceInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        listAdvanceInfo().then(response => {
          const data = response.data
          commit('setAdvanceInfo', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
