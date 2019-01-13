import axios from '@/libs/api.request'

export const getIncomeList = (project_id) => {
  return axios.request({
    url: '/get_receivable_list_for_advance',
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
