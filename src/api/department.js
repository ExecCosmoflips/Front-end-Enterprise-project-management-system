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
