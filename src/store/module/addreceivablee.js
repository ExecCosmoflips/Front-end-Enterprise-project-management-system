import {
  aAddReceivable,
  putProjectList4,
  putCategoryList4

} from '../../api/addreceivable'

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
    addReceivable ({ state, commit }, formItem) {
      return new Promise((resolve, reject) => {
        aAddReceivable(formItem).then(JsonResponse => {
          resolve()
          const data = JsonResponse.data
          alert(data['info'])
        }).catch(err => {
          reject(err)
        })
      })
    },
    getProjectList4 ({ state, commit }, user_id) {
      return new Promise((resolve, reject) => {
        putProjectList4(user_id).then(response => {
          const data = response.data
          commit('setProjectList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getCategoryList4 ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        putCategoryList4(project_id).then(response => {
          const data = response.data
          commit('setCategoryList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
