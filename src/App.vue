<template>
  <div id="app">
    <myheader></myheader>
    <div id=container>
      <div id="top">
        <h2 id="top-title">AV Zeus</h2>
        <p id=top-subtitle>AV人工痴能エンジン</p>
      </div>
    <p id="top-discription">最先端AV人工知能エンジン「AVZeus」は、貴方の好みに合ったオススメのAV女優をレコメンドしてくれる人工痴能です。<br/>
    ゼウスに好きなタイプを伝えて、どストライクのAVと出会おう！</p>
    <img class="zeus" src="zeus.png" alt="">
    <!-- <a href="http://localhost:8000/wemen" class="btn"><span style="font-family: Montserrat; font-size:30px">AV Zeus</span> に相談する</a> -->
    <Btn></Btn>
    <p class="copyright">©2021 AVZeus</p>
    </div>


    <!-- <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      NO TEXT
    </p> -->
    <!-- <a href="http://localhost:8000/actresses">ACTRESSES</a> -->





    <!-- <input type="text" v-model="msg">
    <button @click="clear()">CLEAR</button> -->
  </div>
</template>

<script>
import myheader from './components/myheader'
import Btn from './components/Btn'
export default{
  components:{
    myheader,
    Btn
  },
  data(){
    return{
      msg:'Hello World!'
    }
  },
  methods:{
    clear(){
      this.msg=''
    }
  },
  created(){
    fetch('http://localhost:8000/wemen')
    .then(response=>{
      console.log(response)
      return response.json()
    })
    .then(json=>{
      this.msg = json
    })
    .catch((err)=>{
      this.msg=err
    });
  }
}
</script>

<style scoped>
  #container{
    margin: 0px 10px;
  }
  #top{
    text-align: center;
    margin: 100px auto;
  }
  #top-discription{
    font-size: 10px;
    line-height: 20px;
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
  .zeus{
    width: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .copyright{
    font-size: 10px;
  }
</style>
