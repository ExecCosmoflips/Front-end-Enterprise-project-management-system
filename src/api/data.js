import axios from '@/libs/api.request'
import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {

}

export const uploadImg = formData => {
  return axios.request({
    url: '/image/upload',
    data: formData,
    method: 'post'
  })
}

export const getOrgData = () => {
  return axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}
export const getProjectDataBar = (project_id) => {
  return axios.request({
    url: 'get_project_bar_data',
    params: {
      project_id
    },
    method: 'get'
  })
}

export const getProjectDataPie = (project_id, begin_time, end_time) => {
  return axios.request({
    url: 'get_project_pie_data',
    params: {
      project_id,
      begin_time,
      end_time
    },
    method: 'get'
  })
}

export const getProjectData = (id) => {
  const Random = Mock.Random
  let incomeList = []
  let expendList = []
  let barData = {}
  doCustomTimes(36, () => {
    incomeList.push(Mock.mock({
      date: Random.date('yy-MM'),
      number: Random.float(10000, 30000)
    }))
    expendList.push(Mock.mock({
      date: Random.date(),
      number: Random.float(5000, 20000)
    }))
  })
  for (let i = 0, len = incomeList.length; i < len; i++) {
    barData[incomeList[i].date] = incomeList[i].number
    // this.barData[this.expendList[i].date] = this.expendList[i].number
    // this.barData[this.profitList[i].date] = this.profitList[i].number
  }
  return barData
}


