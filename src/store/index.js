import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import app from './module/app'
import department from './module/department'
import addexpend from './module/addexpend'
import addreceivablee from './module/addreceivablee'
import super_admin from './module/super_admin'
import superadmin from './module/superadmin'
import data from './module/data'
import check_expend from './module/check_expend'
import receivable from './module/receivable'
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
    super_admin,
    data,
    superadmin,
    check_expend,
    receivable,
    addexpend
  }
})
