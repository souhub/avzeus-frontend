<template>
  <div id="app">
    <Header></Header>
    <div id=container>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default{
  components:{
    Header,
    Footer
  }
}
</script>

<style>
  /* 全体に適用するCSS */
html {
  background-color: purple;
}

a[target="_blank"]::after{
  font-family: "Font Awesome 5 Free";
  content: '\f360';
  font-size: 70%;
  font-weight: 900;
  margin: 0 3px;
}

li {
  list-style-type: none;
}

h2,p {
  color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
}

#container {
  margin: auto 10px;
}

.btn {
  background: #2bee86; /* 背景色 */
  color: #fff; /* 文字色 */
  padding: 16px 40px; /* 上下の余白、左右の余白 */
  text-decoration: none; /* デフォルトで入るリンクの下線を消す */
  border-radius: 10px; /* 角を丸くする */
  display: block;
  text-align: center;
  font-size: 15px;
  margin: 20px 0px;
  font-weight: bold;
}

.btn-back{
  width:100%;
  background-color: gray
}

#zeus {
  width: 70px;
  display: block;
  margin: auto;
}

#fukidashi-wrapper {
  text-align: center;
}

#fukidashi {
  margin: auto;
  position: relative;
  display: inline-block;
  margin: 1.5em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #fff;
  border: solid 3px #555;
  box-sizing: border-box;
  border-radius: 15px;
}

#fukidashi:before {
  content: "";
  position: absolute;
  bottom: -24px;
  left: 50%;
  margin-left: -15px;
  border: 12px solid transparent;
  border-top: 12px solid #fff;
  z-index: 2;
}

#fukidashi:after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  margin-left: -17px;
  border: 14px solid transparent;
  border-top: 14px solid #555;
  z-index: 1;
}

#fukidashi p {
  margin: 0;
  padding: 0;
  color: black;
  text-align-last: left;
}

</style>
