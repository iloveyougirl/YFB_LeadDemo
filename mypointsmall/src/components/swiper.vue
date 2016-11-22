<template>
    <div id="carousel">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/logo.png">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/logo.png">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/logo.png">
                </div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
 import Swiper from '../js/swiper-3.4.0.min.js'
 require('../js/swiper-3.4.0.min.css')
 export default {
   components: {},
   mounted () {
     var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       autoplay: 2000,//可选选项，自动滑动
       // 如果需要分页器
       pagination: '.swiper-pagination',
       // 如果需要前进后退按钮
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev'
     })
     console.log(mySwiper)
   }
 }
</script>

<style>
#carousel {
  color: #2c3e50;
  text-align:center;
}
#carousel img{
}
.swiper-container{
    float:left;
    width: 820px;
    height: 350px;
    margin:48px 0 30px 0;
}

</style>
