import axios from '@/libs/api.request'

export const getIncomeList = (project_id) => {
  return axios.request({
    url: '/get_receivable_list_for_income',
    params: {
      project_id
    },
    method: 'get'
  })
}

export const listIncomeInfo = () => {
  return axios.request({
    url: '/list_income_info',
    method: 'get'
  })
}

export const confirmIncome = (formData) => {
  return axios.request({
    url: '/confirm_income',
    data: formData,
    method: 'post'
  })
}

export const getIncomeTitleList = (project_id) => {
  return axios.request({
    url: '/get_income_title_list',
    params: {
      project_id
    },
    method: 'get'
  })
}

export const getReceivableCategoryListForIncome = (receivable_category) => {
  return axios.request({
    url: '/category_get_receivable_for_income',
    params: {
      receivable_category
    },
    method: 'get'
  })
}
