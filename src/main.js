import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'material-design-lite/material.min.js'
import 'material-design-lite/material.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
