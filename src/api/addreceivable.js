import axios from '@/libs/api.request'
import qs from 'qs'

export const AAddreceivable = (form) => {
  console.log()
  return axios.request({
    url: 'addreceivable',
    data: qs.stringify(form),
    method: 'post'
  })
}
export const putCategoryList = () => {
  return axios.request({
    url: '/get_category_list3',
    method: 'get'
  })
}
