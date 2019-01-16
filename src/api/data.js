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

// export const getProjectDataPie = (project_id) => {
//   return axios.request({
//     url: 'get_project_bar_data',
//     project_id,
//     method: 'get'
//   })
// }

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

export const getProjectDataPie = (id) => {
  const Random = Mock.Random
  let data = []
  let pieData = []
  doCustomTimes(12, () => {
    data.push(Mock.mock({
      name: Random.cname(),
      value: Random.float(10000, 30000)
    }))
  })
  data.sort((a, b) => b.value - a.value)
  if (data.length >= 10) {
    for (let i = 0; i < 10; i++) {
      pieData.push(data[i])
    }
    let otherNumber = 0
    for (let i = 10; i < data.length; i++) {
      otherNumber += data[i].value
    }
    pieData.push({
      name: '其他类别',
      value: otherNumber
    })
  } else {
    for (let i = 0; i < data.length; i++) {
      pieData.push(data[i])
    }
  }
  return pieData
}
