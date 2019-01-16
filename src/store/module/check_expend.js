import {
  putCategoryList,
  putExpendInfo
} from '../../api/check_expend'

export default {
  state: {
    categoryList: [],
    expendInfo: []
  },
  mutations: {
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
    },
    setExpendInfo (state, expendInfo) {
      state.expendInfo = expendInfo
    }
  },
  actions: {
    getCategoryList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        putCategoryList().then(response => {
          const data = response.data
          commit('setCategoryList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    listExpendInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        putExpendInfo().then(response => {
          const data = response.data
          commit('setExpendInfo', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
