<template>
   <div id="selection">
      <div id="fukidashi-wrapper">
         <div id="fukidashi">
            <p>
               下の9人のおなごの中から好きなおなごを<span class="attention" >かわいいと思う順に最大5人まで</span>選ぶのじゃ。<br/>
               これを元におぬし好みのAVを授けるぞい！
            </p>
         </div>
         <img id="zeus" src="img/zeus.png" alt="zeus">
      </div>

         <form action="http://localhost:8000/select" method="post">
            <div class="box">
               <div class="child" v-for="(woman,index) in this.$root.wemen" :key=index>
                  <input type="checkbox" :id=index name="selected_woman" :value=index v-model="selectedWemen">
                  <span class="index">{{index}}</span>
                  <label class="check-box" :for=index>
                     <img class="child-img" :src="woman.image_path" alt="女性の画像">
                  </label>
               </div>
            </div>
            <p id="std">
               <i id="like" class="fas fa-heart"></i> ←ーーーーーーー→ <i id="dislike" class="fas fa-heart-broken"></i><br/>
               <span>{{selectedWemen}}</span>
            </p>
         </form>

      <div class="btns">
         <a class="btn" href="/recommendation">{{selectedWemen.length}}人選んで次へ</a>
         <button class="btn" onclick="history.back()" style="width:100%; background-color: gray">戻る</button>
      </div>

   </div>
</template>

<script scoped>
export default{
   data(){
      return {
         selectedWemen: []
      }
   }
}
</script>

<style scoped>
#like{
   color:palevioletred;
}

#dislike{
   color: black;
}

#std{
   text-align: center;
}

.attention{
   font-weight: 900;
   color: red;
}

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

input[type="checkbox"]{
   display: none;
}
/* checkされたときのCSS */
input:checked+.index{
color: #5ae099;
}

input:checked ~ * .child-img{
   opacity: 0.7;
}

</style>
