<template>
    <div>
      <div id="about-btn-wrapper">
        <a id="about-btn" href="/about" style="text-decoration: underline">このサイトについて</a>
      </div>
        <div id="top">
          <h2 id="top-title">AV Zeus</h2>
          <p id=top-subtitle>AV人工痴能エンジン</p>
          <p id="top-discription">
            最先端AV人工知能エンジン「AVZeus」は、貴方の好みに合ったオススメのAV女優をレコメンドしてくれる人工痴能です。<br/>
            ゼウスに好きなタイプを伝えて、ドストライクのAVと出会おう！
          </p>
        </div>
        <img id="zeus" src="https://storage.googleapis.com/avzeus/zeus.png" alt="zeus">
        <a href="/introduction" class="btn"><span style="font-family: Montserrat; font-size:30px">AV Zeus</span> に相談する</a>
    </div>
</template>


<style scoped>
  #about-btn-wrapper{
    text-align: right;
  }
  #about-btn{
    font-weight: bold;
    font-size: 12px;
  }
  #top{
    text-align: center;
    margin: 35px auto;
  }
  #top-discription{
    font-size: 15px;
    line-height: 25px;
    text-align: left;
    display: inline-block;
  }
  #top-title{
    font-family: "Montserrat";
    font-size: 40px;
    line-height: 0px;
  }
  #top-subtitle{
    line-height: 0px;
    font-size: 10px;
  }
  #zeus{
    width: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
