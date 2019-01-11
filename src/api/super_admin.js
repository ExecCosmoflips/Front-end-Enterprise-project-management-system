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
<<<<<<< HEAD

=======
>>>>>>> Add something to api/super_admin.js. Ref #88
export const getAAddTreasurer = (form) => {
  console.log(form)

  return axios.request({
    url:'/add_treasurer',
    data:qs.stringify(form),
    method:'post'
  })
}
<<<<<<< HEAD
export const SetuppDepartmentName = (form) => {
  console.log(form)

  return axios.request({
    url:'/setup_dep_name',
=======
export const setuppDepatmentName = (form) => {
  console.log(form)

  return axios.request({
    url:'/setup-dep-name',
>>>>>>> Add something to api/super_admin.js. Ref #88
    data:qs.stringify(form),
    method:'post'
  })
}



