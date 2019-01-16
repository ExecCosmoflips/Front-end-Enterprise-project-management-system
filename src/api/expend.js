import axios from '@/libs/api.request'

export const getConfirmExpendList = (project_id) => {
  return axios.request({
    url: '/get_confirm_expend_list_for_expend',
    params: {
      project_id
    },
    method: 'get'
  })
}

export const listConfirmExpendInfo = () => {
  return axios.request({
    url: '/list_confirm_expend_info',
    method: 'get'
  })
}

export const confirmExpend = (formData) => {
  return axios.request({
    url: '/confirm_expend',
    data: formData,
    method: 'post'
  })
}

export const getExpendList = (project_id) => {
  return axios.request({
    url: '/get_expend_list',
    params: {
      project_id
    },
    method: 'get'
  })
}
