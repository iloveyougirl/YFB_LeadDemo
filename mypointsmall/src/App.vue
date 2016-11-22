<template>
  <div>
    <div class='nav-wrap'>
      <div class='publicwidth'>
        <ul class='public-nav'>
          <li>首页</li>
          <li>赚取积分</li>
          <li>兑换商品</li>
          <li>夺宝</li>
          <li>竞拍</li>
          <li>常见问题</li>
        </ul>
      </div>
    </div>
    <div class='publicwidth'>
      <div class='swiper'>
        <Swiper></Swiper>
      </div>
    </div>
    <div class='publicwidth'>
      <div class='tabsbookmark'>
        <tabsbookmark></tabsbookmark>
      </div>
    </div>
  </div>

</template>

<script>
import Swiper from './components/swiper'
import tabsbookmark from './components/tabsbookmark'
  export default {
    data () {
      return {
      }
    },
    components:{
    Swiper,
    tabsbookmark
    }
  }
</script>
<style>
 /*公共部分*/
*{
   margin:0;
   padding:0;
}
body{
   background:#F1f1f1;
}
.publicwidth{
  width:1200px;
  margin:0 auto;
}
  /*导航条*/
.nav-wrap{
   background: #FF4400;
   max-width: 100%;
   height: 40px;
}
.public-nav li{
    float: left;
    list-style: none;
    color: white;
    font-size: 24px;
    margin-top: 5px;
    padding: 0 30px 0 30px;
    border-right: 1px solid rgba(97, 121, 108, 0.42);
    cursor: pointer;
}
.swiper{
}
.tabsbookmark{
    clear:both;
    background:white;
    width:820px;
    height:1000px;
    padding-top: 30px;
}
</style>
