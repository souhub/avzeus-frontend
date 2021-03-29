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
      <a class="btn" href="/recommendation">人選んで次へ</a>
      <button class="btn" onclick="history.back()" style="width:100%; background-color: gray">戻る</button>
      <form action="" >
         <div class="box">
            <div class="child" v-for="(woman,index) in this.$root.wemen" :key=index>
               <input type="checkbox" name="selected_woman" :value="index"><img class="child-img" :src="woman.image_path" alt="女性の画像">
            </div>
         </div>
      </form>
   </div>
</template>

<script scoped>
</script>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  align-content: flex-start;
}
.child{
   width: 30%;
}

.child-img{
   width: 100%;
}
</style>
