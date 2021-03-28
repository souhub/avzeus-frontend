<template>
  <div id="app">
    <myheader></myheader>
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      NO TEXT
    </p>
    <a href="http://localhost:8000/actresses">ACTRESSES</a>
    <input type="text" v-model="msg">
    <button @click="clear()">CLEAR</button>
  </div>
</template>

<script>
import myheader from './components/myheader'
export default{
  components:{
    myheader
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


