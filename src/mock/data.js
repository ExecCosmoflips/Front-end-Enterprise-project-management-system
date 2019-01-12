import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
import orgData from './data/org-data'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      name: '@name',
      email: '@email',
      createTime: '@date'
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}

export const uploadImage = req => {
  return Promise.resolve()
}

export const getOrgData = req => {
  return orgData
}

export const getBarData = req => {
  let incomeList = []
  let expendList = []
  doCustomTimes(36, () => {
    incomeList.push(Mock.mock({
      date: Random.date(),
      number: Random.float(10000, 30000)
    }))
    expendList.push(Mock.mock({
      date: Random.date(),
      number: Random.float(5000, 20000)
    }))
  })
  return {
    'incomeList': incomeList,
    'expendList': expendList
  }
}
