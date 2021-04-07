<template>
<div>
   <div id="fukidashi-wrapper">
      <div id="fukidashi">
         <p>
            ワシがAVのことなら全知全能のAVゼウスじゃ。<br/>
            お主好みの最高のAVを授けてみせよう。<br/>
            ではさっそく始めていくぞ。
         </p>
      </div>
      <img id="zeus" src="https://storage.googleapis.com/avzeus/zeus.png" alt="zeus">
   </div>
   <p>{{ user_code }}</p>
   <a class="btn" href="/selection">よろしこお願いします！</a>
   <button class="btn" onclick="history.back()" style="width:100%; background-color: gray">戻る</button>
</div>
</template>

<script>
export default {
  props: {
    user_code: String
  },
};
</script>

<style>
</style>
