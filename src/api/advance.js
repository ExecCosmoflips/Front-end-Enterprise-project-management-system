import axios from '@/libs/api.request'

export const recordAdvance = (formData) => {
  return axios.request({
    url: '/record_advance',
    data: formData,
    method: 'post'
  })
}

export const getDepartmentList = () => {
  return axios.request({
    url: '/get_department_list_for_advance',
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

export const getAdvanceTitleList = (project_id) => {
  return axios.request({
    url: '/get_advance_title_list',
    params: {
      project_id
    },
    method: 'get'
  })
}

export const getReceivableCategoryList = (receivable_category) => {
  return axios.request({
    url: '/use_category_get_receivable',
    params: {
      receivable_category
    },
    method: 'get'
  })
}
