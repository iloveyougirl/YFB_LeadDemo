<template>
    <div>
        <div class='topbg'>
            <div class='Avatarpic' v-link="{path: '/Usercenter'}"><img src='./assets/ball.png'></div>
            <div><i class="iconfont icon-calendar"></i></div>
        </div>

        <div class='bottombg'>
            <div class='swiperwrap'>
                <swiper :list="list" height='100px' auto></swiper>
            </div>
            <div  style='background:white;padding-left:20px;'>
                <swiper auto height="26px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
                    <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务</p></swiper-item>
                    <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包</p></swiper-item>
                    <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务</p></swiper-item>
                    <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包</p></swiper-item>
                    <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包</p></swiper-item>
                    <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包</p></swiper-item>
                </swiper>
            </div>

            <div class='iconwrap'>
                <div class='someicon'>
                    <flexbox>
                        <flexbox-item v-link="{path: '/Usercenter'}">
                            <div class='someiconstyle'>
                                <i class="iconfont icon-wodedingdan"></i>
                            </div>
                            <div class="flex-demo">用户中心</div>
                        </flexbox-item>
                        <flexbox-item>
                            <div class='someiconstyle'>
                                <i class="iconfont icon-wodedingdan"></i>
                            </div>
                            <div class="flex-demo">我的订单</div>
                        </flexbox-item>
                        <flexbox-item>
                            <div class='someiconstyle'>
                                <i class="iconfont icon-wodedingdan"></i>
                            </div>
                            <div class="flex-demo">积分排行</div>
                        </flexbox-item>
                        <flexbox-item v-link="{path:'/Exchangecenter'}">
                            <div class='someiconstyle'>
                                <i class="iconfont icon-wodedingdan"></i>
                            </div>
                            <div class="flex-demo">兑换中心</div>
                        </flexbox-item>
                    </flexbox>
                </div>
                <div class='containerbox'>
                    <div style='float:left;padding:0 20px 0 10px;'><i class="iconfont icon-ziranfengguang"></i></div>
                    <div class="li-box">
                        <ul>
                            <li>飞鲨勇士张超：曾驾歼-8战机</li>
                            <li>台媒炒作大陆军机飞临台</li>
                            <li>菲总统对华为何晴转阴</li>
                            <li>外媒称韩国醉心中等强国地位 </li>
                            <li>伊朗官方回应日本驻伊大使被</li>
                            <li>飞鲨勇士张超：曾驾歼-8战机</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class='recommendContent'>
                <div>
                    <flexbox style="padding:15px 0px">
                        <flexbox-item>
                            <div class="flex-demo3" style='font-size:14px; padding-left: 17px;'>热门推荐</div>
                        </flexbox-item>
                        <flexbox-item>
                            <div class="flex-demo3" style='float:right;color:#cccccc;padding-right:25px;'>更多 >></div>
                        </flexbox-item>
                    </flexbox>
                </div>

                <div>
                    <flexbox>
                        <flexbox-item>
                            <div class="flex-demo2">
                                <img src='https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'>
                                <div><span>39</span>积分</div>
                            </div>
                        </flexbox-item>

                        <flexbox-item>
                            <div class="flex-demo2">
                                <img src='https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'>
                                <div><span>39</span>积分</div>
                            </div>
                        </flexbox-item>
                    </flexbox>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
/*轮播插件*/
import Swiper from 'vux-components/swiper'
/*插件*/
import Flexbox from 'vux-components/flexbox/flexbox'
import FlexboxItem from 'vux-components/flexbox/flexbox-item'
/**/
import SwiperItem from 'vux-components/swiper-item'
export default {
  methods: {
  },
  data: function () {
    return {
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
   Swiper,Flexbox, FlexboxItem,SwiperItem
  }
}
</script>

<style>
/*头像*/
.Avatarpic{
   position:absolute;
   top: 2.5em;
   left: 1.5em;
   width: 60px;
   height:60px;
   border-radius: 50%;
   overflow: hidden;
}
 .Avatarpic img{
    	width: 100%;
}

.flex-demo2{
   padding: 10px;
   border:1px solid #EEEEEE;
}
.flex-demo2 img{
   width:100%;
   height:100%;
}
/*图标大小改变*/
.icon-calendar{
   position:absolute;
   top: 2em;
   right: 1.5em;
   font-size:25px;
   color:white;
}
.icon-wodedingdan{
   font-size:20px;
}
.icon-ziranfengguang{
   font-size:25px;
}
*{
   margin:0;
   padding:0;
}
/*上背景*/
.topbg{
   position:relative;
   height:220px;
   width:100%;
   background:#333333;
}
/*下背景*/
.bottombg{
   background:#F2F2F2;
   width:100%;
   height:1000px;
}
/*图标包裹*/
.iconwrap{
   height:128px;
   background:white;
   margin:10px 0;
}
/*四幅图片包裹*/
.someicon{
   height:80px;
   border-bottom: 1px solid #EEEEEE;
}
/*四幅图片布局样式*/
.someiconstyle{
   text-align:center;
   padding-top:20px;
}
/*四幅图片以及相应文字*/
.flex-demo {
  text-align:center;
  margin-bottom: 8px;
  -webkit-background-clip: padding-box;
}
/*css3 文字向上滚动*/
.containerbox{
   background:white;
   padding:10px;
   font-family:"Microsoft YaHei";
}
.containerbox .li-box{
   height:28px;
   overflow:hidden;
}
.containerbox ul{
  position:relative;
  animation: moveUp 8s infinite cubic-bezier(1,0,0.5,0);
  -webkit-animation: moveUp 8s infinite  cubic-bezier(1,0,0.5,0);
}
@keyframes moveUp
{
    0%{
        transform: translateY(0px);
    }
    20%{
        transform: translateY(-28px);
    }
    40%{
        transform: translateY(-56px);
    }
    60%{
        transform: translateY(-84px);
    }
    80%{
        transform: translateY(-112px);
    }
    100%{
        transform: translateY(-140px);
    }
}

@-webkit-keyframes moveUp /*Safari and Chrome*/
{
   0%{
        -webkit-transform: translateY(0px);
    }
    20%{
        -webkit-transform: translateY(-28px);
    }
    40%{
        -webkit-transform: translateY(-56px);
    }
    60%{
        -webkit-transform: translateY(-84px);
    }
    80%{
        -webkit-transform: translateY(-112px);
    }
    100%{
        -webkit-transform: translateY(-140px);
    }
}
.containerbox ul:hover{
  animation-play-state:paused;
  -webkit-animation-play-state:paused;
}
.containerbox li{
  list-style:none;
  line-height:1.8;
  color:#666;
  border-left: 1px solid #EEEEEE;
  text-indent: 8%;
}
/*推荐内容包裹*/
.recommendContent{
  height:500px;
  background: white;

}
</style>
