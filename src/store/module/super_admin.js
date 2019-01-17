import {
  setuppDepatmentName
} from '../../api/super_admin'

export default {
  actions: {
    SetupDepartmentName ({ state, commit }, department_name) {
      return new Promise((resolve, reject) => {
        setuppDepatmentName(department_name).then(response => {
          alert(response.data.info)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
