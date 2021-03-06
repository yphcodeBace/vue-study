import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NormailizeCss from 'normalize.css'
import less from 'less'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import echarts from 'echarts'

import App from './App'
import router from './router'
import store from './vuex/store'

//自適應方案核心
// import 'lib-flexible'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(less)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
