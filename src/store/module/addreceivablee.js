import {
  AAddreceivable
} from '../../api/addreceivable'

export default {
  state: {
    project: '',
    category: '',
    title: '',
    number: '',
    agreement: ''
  },
  mutations: {
    setDepartment (state, department) {
      state.department = department
    },
    setProject (state, project) {
      state.project = project
    },
    setCategory (state, category) {
      state.category = category
    },
    setTitle (state, title) {
      state.title = title
    },
    setNumber (state, number) {
      state.number = number
    },
    setAgreement (state, agreement) {
      state.agreement = agreement
    }
  },

  actions: {
    Addreceivable ({ state, commit }, formItem) {
      console.log(formItem)
      return new Promise((resolve, reject) => {
        AAddreceivable(formItem).then(JsonResponse => {
          const data = JsonResponse.data
          alert(data['info'])
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
