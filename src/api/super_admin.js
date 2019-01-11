import axios from '@/libs/api.request'
import qs from 'qs'

export const getAAddDepartmentAdmin = (form) => {
  console.log(form)

  return axios.request({
    url:'/add_department_admin',
    data:qs.stringify(form),
    method:'post'
  })
}



