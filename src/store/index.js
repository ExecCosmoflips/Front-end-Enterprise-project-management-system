import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import department from './module/department'
import addreceivablee from './module/addreceivablee'
import super_admin from './module/super_admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    department,
    addreceivablee,
    super_admin
  }
})
