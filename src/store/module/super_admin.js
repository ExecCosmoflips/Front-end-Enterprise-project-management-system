import {
  getAAddDepartmentAdmin
} from "../../api/super_admin"
import { setToken, getToken } from '@/libs/util'

export default {
  state:{
    department:'',
    username:'',
    name:'',
    email:'',
    phone:'',
    gender:'',
  },
  mutations:{
    setDepartment(state,department){
      state.department=department
    },
    setUsername(state,username){
      state.username=username
    },
    setName(state,name){
      state.name=name
    },
    setEmail(state,email){
      state.email=email
    },
    setPhone(state,phone){
      state.phone=phone
    },
    setGender(state,gender){
      state.gender=gender
    },
  },

  actions:{
    getAddDepartmentAdmin({state,commit},formItem){
      console.log(formItem)
      return new Promise((resolve, reject) =>{
        getAAddDepartmentAdmin(formItem).then(JsonResponse =>{
           const data = JsonResponse.data
           alert(data['info'])
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
  }
}


