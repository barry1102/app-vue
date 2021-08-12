import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './icons' // icon
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import cookie from './plugins/cookie'
import './permission' // permission control

Vue.config.productionTip = false

new Vue({
  router,
  store,
  cookie,
  render: h => h(App)
}).$mount('#app')
