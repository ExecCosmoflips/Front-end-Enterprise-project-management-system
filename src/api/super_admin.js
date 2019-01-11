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

export const getAAddTreasurer = (form) => {
  console.log(form)

  return axios.request({
    url:'/add_treasurer',
    data:qs.stringify(form),
    method:'post'
  })
}
export const SetuppDepartmentName = (form) => {
  console.log(form)

  return axios.request({
    url:'/setup_dep_name',
    data:qs.stringify(form),
    method:'post'
  })
}



