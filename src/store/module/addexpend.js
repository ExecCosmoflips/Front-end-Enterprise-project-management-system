import {
  Addexpend,
  putCategoryList
} from '../../api/addexpend'

export default {
  state: {

    project: '',
    category: '',
    title: '',
    number: '',
    agreement: '',
    categoryList: []

  },
  mutations: {
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
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
    Addexpend ({ state, commit }, formItem) {
      console.log(formItem)
      return new Promise((resolve, reject) => {
        Addexpend(formItem).then(JsonResponse => {
          const data = JsonResponse.data
          alert(data['info'])
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
