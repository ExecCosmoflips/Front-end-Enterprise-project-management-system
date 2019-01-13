import axios from '@/libs/api.request'

export const setLogo = (formData) => {
  return axios.request({
    url: '/set_logo',
    data: formData,
    method: 'post'
  })
}
export const getLogo = () => {
  return axios.request({
    url: '/set_logo',
    method: 'get'
  })
}
