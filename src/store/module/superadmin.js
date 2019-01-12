import {
  getDepartmentList,
} from '../../api/superadmin'

export default {
  state: {
    departmentList: [],
  },
  mutations: {
    setDepartmentList (state, departmentList) {
      state.departmentList = departmentList
    },
  },
  getters: {

  },
  actions: {
    handleGetDepartmentList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getDepartmentList(id).then(response => {
          const data = response.data
          commit('setDepartmentList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
