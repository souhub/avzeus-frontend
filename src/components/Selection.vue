<template>
   <div>
      <div id="fukidashi-wrapper">
         <div id="fukidashi">
            <p>
               下の9人のオナゴの中から好きなオナゴをかわいいと思う順に最大5人まで選ぶのじゃ。<br/>
               これを元にお主に最適のAVを授けるぞい！
            </p>
         </div>
         <img id="zeus" src="img/zeus.png" alt="zeus">
      </div>

         <form action="/select" method="post">
            <div class="box">
               <div class="child" v-for="(woman,index) in this.$root.wemen" :key=index>
                  <label :for=index>
                     <input type="checkbox" :id=index name="selected_woman" :value=index>
                     <img class="child-img" :src="woman.image_path" alt="女性の画像">
                  </label>
               </div>
            </div>
         </form>

      <div class="btns">
         <a class="btn" href="/recommendation">人選んで次へ</a>
         <button class="btn" onclick="history.back()" style="width:100%; background-color: gray">戻る</button>
      </div>

   </div>
</template>

<script scoped>
</script>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  text-align: center;
}
.child{
   width: 33%;
}

.child-img{
   width: 100%;
   max-width: 200px;
}
</style>
