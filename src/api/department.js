import axios from '@/libs/api.request'

export const getProjectList = (department_id) => {
  return axios.request({
    url: '/get_project_list',
    params: {
      department_id
    },
    method: 'get'
  })
}

export const getProjectInfo = (project_id) => {
  const data = {
    project_id
  }
  return axios.request({
    url: '/api/get_project_info',
    data,
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
