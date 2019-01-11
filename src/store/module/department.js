import {
  getProjectList,
  getProjectInfo,
  getDepartmentStaff
} from '../../api/department'

export default {
  state: {
    projectOpenList: [],
    projectCloseList: [],
    projectInfo: {},
    departmentStaff: {}
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
    },
    setDepartmentStaff (state, staffs) {
      state.departmentStaff = staffs
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
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    handleProjectInfo ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        getProjectInfo(id).then(response => {
          const data = response.data

          commit('setProjectInfo', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    handleGetDepartmentStaff ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        getDepartmentStaff(id).then(response => {
          const data = response.data
          commit('setDepartmentStaff', data)
          resolve()
        })
      })
    },
    handleEditProject({ state, commit }, form){


    }
  }
}
