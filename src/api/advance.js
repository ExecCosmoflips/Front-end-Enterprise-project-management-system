import axios from '@/libs/api.request'

export const getDepartmentList = () => {
  return axios.request({
    url: '/get_department_list',
    method: 'get'
  })
}

export const getProjectList = (department_id) => {
  return axios.request({
    url: '/get_project_list',
    params: {
      department_id
    },
    method: 'get'
  })
}
