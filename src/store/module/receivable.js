import {
  putCategoryList,
  putlistReceivableInfo
} from '../../api/receivable'

export default {
  state: {
    categoryList: [],
    receivableInfo: []
  },
  mutations: {
    setCategoryList(state, categoryList) {
      state.categoryList = categoryList
    },
    setReceivableInfo(state, receivableInfo) {
      state.receivableInfo = receivableInfo

    },
    actions: {
      getCategoryList({state, commit}) {
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

      listReceivableInfo({state, commit}) {
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
}
