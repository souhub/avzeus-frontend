<template>
   <div>
      <div id="fukidashi-wrapper">
         <div id="fukidashi">
            <div v-if="loading">
               <p>お主好みの女優を計算中じゃ！</p>
               <p>もうしばらく待っておくれい！</p>
            </div>
            <div v-if="!loading">
               <p>全知全能のワシが分析したお主に最適のAV女優はこの娘らじゃ！！</p>
               <p>上からおすすめ順に並べたぞい！</p>
               <p>FANZAに飛べるようにしてあるから楽しんでおくれい！</p>
            </div>
         </div>
         <img id="zeus" src="https://storage.googleapis.com/avzeus/zeus.png" alt="zeus">
      </div>

      <br/>
      <br/>

      <vue-loading v-if="loading" type="spiningDubbles" color="white" :size="{ width: '150px', height: '150px' }"></vue-loading>
      <div v-if="!loading">
         <div v-for="(actress,index) in recommendedActresses" :key=index style="text-align:center">
            <img class="actress-img" :src="actress.image_path" :alt="actress.name">
            <p class="actress-name">{{actress.name}}</p>
            <ul>
               <li><a :href="actress.list_url.Digital" target="_blank" v-on:click="postResult(actress.id,trainingID)">動画</a></li>
               <li><a :href="actress.list_url.Monthly" target="_blank" v-on:click="postResult(actress.id,trainingID)">月額動画 見放題chプレミアム</a></li>
               <li><a :href="actress.list_url.Mono" target="_blank" v-on:click="postResult(actress.id,trainingID)">DVD通販</a></li>
               <li><a :href="actress.list_url.Rental" target="_blank" v-on:click="postResult(actress.id,trainingID)">DVDレンタル</a></li>
            </ul>
         </div>
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
         recommendedActresses: Array,
         loading: true,
         trainingID: Number
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
           this.trainingID=response.data.training_id,
           this.recommendedActresses=response.data.recommended_actresses,
           this.loading=false
           })
        .catch((err)=>{console.log(err)})
        .finally(()=>this.loading=false)
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
   .actress-img{
      width:250px;
      border-radius:50%
   }
   .actress-name{
      font-size: 30px;
   }
</style>
