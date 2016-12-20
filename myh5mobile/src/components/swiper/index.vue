<template>
    <div>
        <div class='bottombg'>
            <div class='swiperwrap'>
                <swiper :list="list" height='120px'></swiper>
            </div>
        </div>
            <!--<div  style='background:white;padding-left:20px;'>-->
            <!--<swiper auto height="26px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">-->
            <!--<swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务</p></swiper-item>-->
            <!--<swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包</p></swiper-item>-->
            <!--<swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务</p></swiper-item>-->
            <!--<swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包</p></swiper-item>-->
            <!--<swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包</p></swiper-item>-->
            <!--<swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包</p></swiper-item>-->
            <!--</swiper>-->
            <!--</div>-->
    </div>
</template>
<style>

</style>
<script>
/*轮播插件*/
import Swiper from 'vux-components/swiper'
import "./index.css"
    export default{
        data(){
            return{
             list:[{
                img:'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg',
                title:'如何手制一份秋意的茶'
             }, {
                img:'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg',
                title:'茶包VS原叶茶'
             }, {
                img:'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg',
                title:'播下茶籽,明春可发芽'
             }]
            }
        },
        components:{
           Swiper
        }
    }
</script>
