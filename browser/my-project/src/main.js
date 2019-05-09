import Vue from 'vue'
import vuex from 'vuex'
import App from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.$echarts=echarts

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAxios,axios)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


