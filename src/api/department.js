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
