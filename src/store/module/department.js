import {
  getProjectList,
  getProjectInfo
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
    },
    setProjectInfo (state, projectInfo) {
      state.projectInfo = projectInfo
    }
  },
  getters: {

  },
  actions: {
    getProjectList ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        getProjectList(id).then(response => {
          const data = response.data
          commit('setProjectOpenList', data.sort((a, b) => new Date(b.begin_time) - new Date(a.begin_time)))
          commit('setProjectCloseList', data.sort((a, b) => new Date(b.end_time) - new Date(a.end_time)))
          console.log(data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    handleProjectInfo ({ state, commit }, id) {
      console.log('info')
      return new Promise((resolve, reject) => {
        getProjectInfo(id).then(response => {
          console.log('info')
          const data = response.data
          console.log(data)
          commit('setProjectInfo', data)
          console.log(data)
          resolve()
        }).catch(error => {
          console.log('info')
          reject(error)
        })
      })
    }
  }
}
