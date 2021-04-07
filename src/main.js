import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

new Vue({
  data(){
    return{
      wemen: Array,
      actresses: Array,
      recommendedActresses: Array
    }
  },
  methods:{
    fetchWemen(){
      axios
        .get('https://avzeus-api.mmu6fa6rgrojg.ap-northeast-1.cs.amazonlightsail.com/wemen')
        .then(response=>{this.wemen=response.data})
        .catch((err)=>{console.log(err)})
        .finally(() => this.loading = false)
    },
    fetchActresses(){
      axios
        .get('https://avzeus-api.mmu6fa6rgrojg.ap-northeast-1.cs.amazonlightsail.com/actresses')
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
