import axios from '@/libs/api.request'

export const putCategoryList = () => {
  return axios.request({
    url: '/get_category_list2',
    method: 'get'
  })
}



export const putExpendInfo = () => {
  return axios.request({
    url: '/put_expend_info',
    method: 'get'
  })
}
