<template>
   <div>
      <div id="fukidashi-wrapper">
         <div id="fukidashi">
            <p>
               全知全能のワシが分析したお主に最適のAVはこれじゃ！！
            </p>
         </div>
         <img id="zeus" src="img/zeus.png" alt="zeus">
      </div>
      <div>
      <form action="localhost:8000/result" method-="POST">
        <div v-for="(actress,index) in this.$root.recommendedActresses" :key=index>
        <a type="submit" :href="getDMMURL($root.recommendedActresses.name)">
            <input type="hidden" name="id" :value="this.$route.query.id">
            <img :src="actress.image_path" alt="女優の画像">
         </a>
         </div>

      <!-- テスト -->
      <p>AIに返すTraining用ID<br/> {{this.$route.query.id}}</p>
      <p>レコメンドされた女優のids: <br/>
      <span style="word-break:break-all">{{this.$route.query.ids}}</span>
      </p>
      <p>states<br/>
      <span style="word-break:break-all">{{this.$route.query.states}}</span>
      </p>
      <p>epsilons<br/>
      <span style="word-break:break-all">{{this.$route.query.epsilons}}</span>
      </p>
      <!-- ここまでテスト -->

      </form>
      </div>
      <a class="btn" href="/">ありがとうございました！</a>
   </div>
</template>

<script>
export default {
   data(){
      return{
         dmmURL: String
      };
   },
   methods:{
      getDMMURL:function(name){
         return this.dmmURL='https://www.dmm.co.jp/digital/videoa/-/list/search/=/?searchstr='+name
      }
   }
};
</script>
