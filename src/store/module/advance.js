import {
  getDepartmentList,
  getProjectList,
} from '../../api/advance'

export default {
  state: {
    departmentList: [],
    projectList: [],
  },
  mutations: {
    setProjectList (state, projectList) {
      state.projectList = projectList
    },
    setDepartmentList (state, departmentList) {
      state.departmentList = departmentList
    }
  },
  actions: {
    getDepartmentList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getDepartmentList().then(respone => {
          const data = respone.data
          commit('setDepartmentList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getProjectList ({ state, commit }, department_id) {
      return new Promise((resolve, reject) => {
        getProjectList(department_id).then(respone => {
          const data = respone.data
          commit('setProjectList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
