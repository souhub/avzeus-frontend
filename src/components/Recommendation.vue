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
      <div>
         <form action="localhost:8000/result" method-="POST">
            <div v-for="(actress,index) in this.recommendedActresses" :key=index style="text-align:center">
               <p>
                  <a :href="getDMMURL(actress.name)" target="_blank">
                     {{actress.name}}
                  </a>
               </p>
            </div>
         </form>
      </div>
      <a class="btn" href="/">ありがとうございました！</a>
   </div>
</template>

<script>
import axios from 'axios'

export default {
   data(){
      return{
         dmmURL: String,
         selectedWemenIDs: this.$route.query.selected_wemen_ids,
         recommendedActresses: Array,

      };
   },
   methods:{
    fetchRecommendedActresses(){
      axios
        .get('https://avzeus-api.mmu6fa6rgrojg.ap-northeast-1.cs.amazonlightsail.com/recommendation',{
          params:{
            // selected_wemen_ids:'1,2,3,4,5'
            selected_wemen_ids:this.selectedWemenIDs
          }
        })
        .then(response=>{this.recommendedActresses=response.data})
        .catch((err)=>{console.log(err)})
        .finally(()=>this.loading=false)
    },
     getDMMURL(name){
         return this.dmmURL='https://www.dmm.co.jp/digital/videoa/-/list/search/=/?searchstr='+name
    }
   },
   created(){
      this.fetchRecommendedActresses()
   }
};
</script>

<style scoped>
   a{
      text-decoration: underline;
      margin-bottom: 10px;
   }
</style>
