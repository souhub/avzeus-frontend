import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios) //追記

new Vue({
  data(){
    return{
      wemen: Array,
      actresses: Array
    }
  },
  methods:{
    fetchWemen(){
      this.axios
        .get('http://localhost:8000/wemen')
        .then(response=>{this.wemen=response.data})
        .catch((err)=>{console.log(err)})
        .finally(() => this.loading = false)
    },
    fetchActresses(){
      this.axios
        .get('http://localhost:8000/actresses')
        .then(response=>{this.actresses=response.data})
        .catch((err)=>{console.log(err)})
        .finally(() => this.loading = false)
    }
  },
  created(){
    this.fetchActresses()
    this.fetchWemen()
  },
  render: h => h(App),
  router
}).$mount('#app')
