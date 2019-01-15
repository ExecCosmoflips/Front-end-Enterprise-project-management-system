import axios from '@/libs/api.request'
import qs from 'qs'

export const Addexpend = (form) => {
  console.log()
  return axios.request({
    url: 'addexpend',
    data: qs.stringify(form),
    method: 'post'
  })
}
export const putCategoryList = () => {
  return axios.request({
    url: '/get_category_list4',
    method: 'get'
  })
}
