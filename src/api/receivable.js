import axios from '@/libs/api.request'

export const putCategoryList = () => {
  return axios.request({
    url: '/get_category_list',
    method: 'get'
  })
}



export const putlistReceivableInfo = () => {
  return axios.request({
    url: '/put_list_receivable_info',
    method: 'get'
  })
}
