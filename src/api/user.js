import axios from '@/libs/api.request'
import qs from 'qs'
export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (id) => {
  return axios.request({
    url: 'get_info',
    params: {
      id
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const spendRegister = (form) => {
  console.log(qs.stringify(form))
  return axios.request({
    url: 'register',
    data: qs.stringify(form),
    method: 'post'
  })
}
