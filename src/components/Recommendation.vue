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
   <form action="" v-for="(actress,index) in this.$root.actresses" :key=index>
      <div>
         <a href=""><input type="hidden" name="actress" value=":index"><img :src="actress.image_path" alt="女優の画像"></a>
      </div>
   </form>
   <a class="btn" href="/">ありがとうございました！</a>
</div>
</template>

<script>
</script>
