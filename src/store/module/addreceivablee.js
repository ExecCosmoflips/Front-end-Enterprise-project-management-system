import {
  AAddreceivable,
  putCategoryList
} from '../../api/addreceivable'


export default {
  state: {
    categoryList: [],
    project: '',
    category: '',
    title: '',
    number: '',
    agreement: ''

  },
  mutations: {
    setCategoryList(state, categoryList) {
      state.categoryList = categoryList
    },
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
    Addreceivable ({ state, commit }, formItem) {
      console.log(formItem)
      return new Promise((resolve, reject) => {
        AAddreceivable(formItem).then(JsonResponse => {
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
