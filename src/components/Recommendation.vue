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
         <div v-for="(actress,index) in this.$root.actresses" :key=index>
        <button type="submit">SUBMIT</button >
            <input type="hidden" name="actress" value=":index">
            <input type="text" name="id" :value="this.$route.query.id">
            <img :src="actress.image_path" alt="女優の画像">
         </div>
      <!-- テスト -->
      <p>ids(AIに返すTraining用ID): {{this.$route.query.id}}</p>
      <p>ids(これをもとに女優データをVueからAPIアクセスで取得): {{this.$route.query.ids}}</p>
      </form>
      </div>
      <a class="btn" href="/">ありがとうございました！</a>
   </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false
    }
  }
};
</script>
