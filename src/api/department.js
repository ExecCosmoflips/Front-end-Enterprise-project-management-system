import axios from '@/libs/api.request'
import qs from 'qs'
export const getProjectList = (department_id) => {
  return axios.request({
    url: '/get_project_list',
    params: {
      department_id
    },
    method: 'get'
  })
}

export const getProjectInfo = (id) => {
  return axios.request({
    url: '/get_project_info',
    params: {
      id
    },
    method: 'get'
  })
}
export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getDepartmentStaff = (department_id, project_id) => {
  return axios.request({
    url: '/get_department_staff',
    params: {
      department_id,
      project_id
    },
    method: 'get'
  })
}

export const submitProjectInfo = (form) => {
  return axios.request({
    url: '/get_project_info',
    data: qs.stringify(form),
    method: 'post'
  })
}

export const sendEmail = (email, department_id) => {
  return axios.request({
    url: '/send_email',
    params: {
      email,
      department_id
    },
    method: 'get'
  })
}

export const getAllStaff = (project_id) => {
  return axios.request({
    url: '/get_all_staff',
    params: {
      project_id
    },
    method: 'get'
  })
}

export const changeStaff = (project_id, staff_list) => {
  const data = {
    project_id,
    staff_list: staff_list + ''
  }
  return axios.request({
    url: '/change_staff',
    data: qs.stringify(data),
    method: 'post'
  })
}

export const getStaffRequest = (department_id) => {
  return axios.request({
    url: '/user_request',
    params: {
      department_id: 1
    },
    method: 'get'
  })
}

export const getFinancialModel = (project_id) => {
  return axios.request({
    url: '/get_financial',
    params: {
      project_id
    },
    method: 'get'
  })
}

export const closeProject = (project_id) => {
  return axios.request({
    url: '/close_project',
    params: {
      project_id
    },
    method: 'get'
  })
}
