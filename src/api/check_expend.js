import axios from '@/libs/api.request'

export const putCategoryList = (project_id) => {
  return axios.request({
    params: {
      project_id
    },
    url: '/get_category_list2',
    method: 'get'
  })
}

export const putProjectList = () => {
  return axios.request({
    url: '/get_project_list_by_id',
    method: 'get'
  })
}


export const putExpendInfo = () => {
  return axios.request({
    url: '/put_expend_info',
    method: 'get'
  })
}
