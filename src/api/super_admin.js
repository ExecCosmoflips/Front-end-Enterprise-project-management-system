import axios from '@/libs/api.request'
import qs from 'qs'

export const setuppDepatmentName = (department_name) => {
  const data = {
    department_name
  }
  return axios.request({
    url: '/setup_dep_name',
    data: qs.stringify(data),
    method: 'post'
  })
}
