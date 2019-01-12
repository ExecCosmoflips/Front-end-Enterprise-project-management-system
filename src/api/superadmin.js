import axios from '@/libs/api.request'

export const getDepartmentList = () => {
  return axios.request({
    url: '/get_department_list',
    params: {
    },
    method: 'get'
  })
}
