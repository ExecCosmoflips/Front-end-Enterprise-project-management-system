import 'iview/dist/styles/iview.css'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import iView from 'iview'
import axios from 'axios'

Vue.use(iView)
axios.defaults.baseURL="/api"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
