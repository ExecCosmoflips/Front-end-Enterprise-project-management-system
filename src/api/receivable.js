import axios from '@/libs/api.request'

export const putCategoryList3 = (project_id) => {
  return axios.request({
    params: {
      project_id
    },
    url: '/get_category_list3',
    method: 'get'
  })
}

export const putlistReceivableInfo = () => {
  return axios.request({
    url: '/put_list_receivable_info',
    method: 'get'
  })
}

export const putProjectList3 = () => {
  return axios.request({
    url: '/get_project_list_by_id2',
    method: 'get'
  })
}
