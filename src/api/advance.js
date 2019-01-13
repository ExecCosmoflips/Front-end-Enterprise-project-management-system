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

export const getReceivableList = (project_id) => {
  return axios.request({
    url: '/get_receivable_list_for_advance',
    params: {
      project_id
    },
    method: 'get'
  })
}

export const listAdvanceInfo = () => {
  return axios.request({
    url: '/list_advance_info',
    method: 'get'
  })
}
