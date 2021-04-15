<template>
   <div>
      <div id="fukidashi-wrapper">
         <div id="fukidashi">
            <p>
               全知全能のワシが分析したお主に最適のAVはこれじゃ！！
            </p>
            <p>上からおすすめ順に並べたぞい！</p>
            <p>DMMに飛べるようにしてあるから楽しんでおくれい！</p>
         </div>
         <img id="zeus" src="https://storage.googleapis.com/avzeus/zeus.png" alt="zeus">
      </div>
      <vue-loading v-if="loading" type="spiningDubbles" color="white" :size="{ width: '150px', height: '150px' }"></vue-loading>
      <div v-if="!loading">
         <!-- <form action="http://localhost:8000/api/result" method-="POST"> -->
            <div v-for="(actress,index) in this.recommendedData.recommended_actresses" :key=index style="text-align:center">
               <p>
                  <a :href="getDMMURL(actress.name)" target="_blank" v-on:click="postResult(actress.id,recommendedData.id)">
                     {{actress.name}}
                  </a>
               </p>
            </div>
         <!-- </form> -->
      </div>
      <a class="btn" href="/">ありがとうございました！</a>
   </div>
</template>

<script>
import axios from 'axios'
import { VueLoading } from 'vue-loading-template'

export default {
   data(){
      return{
         dmmURL: String,
         selectedWemenIDs: this.$route.query.selected_wemen_ids,
         recommendedData: Array,
         loading: true
      };
   },
   methods:{
    fetchRecommendedData(){
      axios
        .post('/api/recommendation',{
            // selected_wemen_ids:'1,2,3,4,5'
            selected_wemen_ids:this.selectedWemenIDs
          })
        .then(response=>{
           this.recommendedData=response.data,
           this.loading=false})
        .catch((err)=>{console.log(err)})
        .finally(()=>this.loading=false)
    },
     getDMMURL(name){
         return this.dmmURL='https://www.dmm.co.jp/digital/videoa/-/list/search/=/?searchstr='+name
    },
    postResult(val,trainingID){
      axios
         .post('/api/result',{
            val: val, // 押された女優ID
            training_id: trainingID
         })
         .then(()=>{console.log("result was posted")})
         .catch((err)=>{console.log(err)})
         .finally(()=>this.loading=false)
    }

   },
   created(){
      this.fetchRecommendedData()
   },
   components: {
      VueLoading
    },
};
</script>

<style scoped>
   a{
      text-decoration: underline;
      margin-bottom: 10px;
   }
</style>
