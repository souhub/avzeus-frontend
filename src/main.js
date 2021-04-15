import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
