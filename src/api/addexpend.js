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
export const putCategoryList5 = (project_id) => {
  return axios.request({
    params: {
      project_id
    },
    url: '/get_category_for_add_expend',
    method: 'get'
  })
}

export const putProjectList5 = (user_id) => {
  return axios.request({
    url: '/get_project_list_by_id_for_add_expend',
    params: {
      user_id: user_id
    },
    method: 'get',
  })
}
