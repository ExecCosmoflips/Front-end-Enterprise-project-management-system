import {
  addExpend,
  putProjectList5,
  putCategoryList5
} from '../../api/addexpend'

export default {
  state: {

    categoryList: [],
    projectList: []
  },
  mutations: {
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
    },
    setProjectList (state, projectList) {
      state.projectList = projectList
    }
  },

  actions: {
    getCategoryList5 ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        putCategoryList5(project_id).then(response => {
          const data = response.data
          console.log(data)
          commit('setCategoryList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    getProjectList5 ({ state, commit }, user_id) {
      return new Promise((resolve, reject) => {
        putProjectList5(user_id).then(response => {
          const data = response.data
          commit('setProjectList', data)
          console.log(data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    addExpend ({ state, commit }, formItem) {
      console.log(formItem)
      return new Promise((resolve, reject) => {
        addExpend(formItem).then(JsonResponse => {
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
