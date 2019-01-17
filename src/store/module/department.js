import {
  getProjectList,
  getProjectInfo,
  getDepartmentStaff,
  submitProjectInfo,
  sendEmail, getAllStaff, changeStaff, getStaffRequest, addProject, changeOutStaff
} from '../../api/department'

export default {
  state: {
    projectOpenList: [],
    projectCloseList: [],
    projectInfo: {},
    departmentStaff: [],
    allStaff: [],
    projectStaff: [],
    staffRequest: []
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
    },
    setAllStaff (state, list) {
      state.allStaff = list
    },
    setProjectStaff (state, list) {
      state.projectStaff = list
    },
    setStaffRequestList (state, list) {
      state.staffRequest = list
    },
    addProject (state, list) {
      state.projectOpenList.push(list)
    }
  },
  getters: {

  },
  actions: {
    getProjectList ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        getProjectList(id).then(response => {
          const data = response.data
          let openList = data.filter((item) => item.status === 1)
          let closeList = data.filter((item) => item.status !== 1)
          commit('setProjectOpenList', openList.sort((a, b) => new Date(b.begin_time) - new Date(a.begin_time)))
          commit('setProjectCloseList', closeList.sort((a, b) => new Date(b.end_time) - new Date(a.end_time)))
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
    handleEditProject ({ state, commit }, form) {
      return new Promise((resolve, reject) => {
        submitProjectInfo(form).then(response => {
          const data = response.data
          commit('setProjectInfo', data)
          resolve()
        })
      })
    },
    handleSendEmail ({ state, commit }, email) {
      return new Promise((resolve, reject) => {
        sendEmail(email, 1).then(response => {
          resolve()
        }
        )
      })
    },
    handleGetAllStaff ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        getAllStaff(project_id, true).then(response => {
          commit('setAllStaff', response.data['all_staff'])
          commit('setProjectStaff', response.data['project_staff'])
          resolve(response.data)
        })
      })
    },
    handleGetOutStaff ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        getAllStaff(project_id, false).then(response => {
          commit('setAllStaff', response.data['all_staff'])
          commit('setProjectStaff', response.data['project_staff'])
          resolve(response.data)
        })
      })
    },
    handleChangeStaff ({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        changeStaff(state.projectInfo.id, data).then(response => {
          commit('setProjectInfo', response.data)
          resolve()
        })
      })
    },
    handleChangeOutStaff ({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        changeOutStaff(state.projectInfo.id, data).then(response => {
          commit('setProjectInfo', response.data)
          resolve()
        })
      })
    },
    handleGetStaffRequest ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getStaffRequest(state.department_id).then(response => {
          commit('setStaffRequestList', response.data)
          resolve()
        })
      })
    },
    handleAddProject ({ state, commit }, form) {
      form['department_id'] = 1
      console.log(form)
      return new Promise((resolve, reject) => {
        addProject(form).then(response => {
          commit('addProject', response.data)
          resolve()
        })
      })
    }
  }
}
