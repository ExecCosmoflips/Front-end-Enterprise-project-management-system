import {
  putCategoryList3,
  putlistReceivableInfo,
  putProjectList3
} from '../../api/receivable'

export default {
  state: {
    categoryList: [],
    receivableInfo: [],
    projectList: []
  },
  mutations: {
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
    },
    setReceivableInfo (state, receivableInfo) {
      state.receivableInfo = receivableInfo
    },
    setProjectList (state, projectList) {
      state.projectList = projectList
    }
  },
  actions: {
    getProjectList2 ({ state, commit }) {
      return new Promise((resolve, reject) => {
        putProjectList3().then(response => {
          const data = response.data
          commit('setProjectList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getCategoryList2 ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        putCategoryList3(project_id).then(response => {
          const data = response.data
          commit('setCategoryList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    listReceivableInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        putlistReceivableInfo().then(response => {
          const data = response.data
          commit('setReceivableInfo', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }

}
