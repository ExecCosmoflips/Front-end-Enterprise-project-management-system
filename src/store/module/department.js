import {
  getProjectList
} from '../../api/department'

export default {
  state: {
    projectOpenList: [],
    projectCloseList: [],
    projectInfo: {}
  },
  mutations: {
    setProjectOpenList (state, projectOpenList) {
      state.projectOpenList = projectOpenList
    },
    setProjectCloseList (state, projectClosetList) {
      state.projectCloseList = projectClosetList
    },
    closeProject (state, project_id) {
      const index = state.projectOpenList.findIndex(_ => _.project_id === project_id)
      const projectItem = state.projectOpenList.splice(index, 1)[0]
      state.projectCloseList.unshift(projectItem)
    }
  },
  getters: {

  },
  actions: {
    getProjectList ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        getProjectList(id).then(respone => {
          const { openList, closeList } = respone.data
          commit('setProjectOpenList', openList.sort((a, b) => new Date(b.begin_time) - new Date(a.begin_time)))
          commit('setProjectCloseList', closeList.sort((a, b) => new Date(b.end_time) - new Date(a.end_time)))
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
