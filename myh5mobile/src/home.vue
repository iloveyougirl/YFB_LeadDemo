<template>
    <div>
        <div class='topbg'>
            <div class='Avatar' v-link="{path: '/Usercenter'}">
                <img src='./assets/1.png'>
            </div>
            <div>
                <div class="iconfont icon-jinbi1"></div>
                <div class="scores">
                    <div style="color: white;">我的积分</div>
                    <div style="color: white;">66666666</div>
                </div>
            </div>
            <div class="Inputstyle">立即签到</div>
            <div>
                <div class="iconfont icon-rili"></div>
            </div>
        </div>

        <div>
            <div>
                <need-option></need-option>
            </div>
            <div>
                <My-swiper></My-swiper>
            </div>
            <div>
                <Hot></Hot>
            </div>

        </div>
    </div>
</template>

<script>
/*轮播插件*/
import MySwiper from "./components/swiper/index"
/*option*/
import NeedOption from "./components/option/index"
/*hot*/
import Hot from "./components/hot/index"
import "./home.css"
export default {
  methods: {
  },
  data: function () {
    return {
    }
  },
  components:{
   MySwiper,NeedOption,Hot
  }
}
</script>
