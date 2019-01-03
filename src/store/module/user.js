import {
  login
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    username: '',
    userId: '',
    token: getToken().token,
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, username) {
      state.username = username
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setAccess (state, access) {
      state.access = access
    },
    setHasGetInfo (state, hasGetInfo) {
      state.hasGetInfo = hasGetInfo
    }
  },
  getters: {

  },
  actions: {
    handleLogin ({commit}, {username, password}) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        }).then(response => {
          const data = response.data
          commit('setToken', data.token)

          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    handleLogOut ({state, commit}) {
      return new Promise((resolve, reject) => {
        commit('setToken', '')
        commit('setAccess', [])
        resolve()
      })
    }
  }
}
