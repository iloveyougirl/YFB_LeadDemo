<template>
    <div style="background-color:#EEEEEE;" class='bounceInUpfilladdress' v-if='isshow'>
        <div>
            <Filladdress></Filladdress>
        </div>
        <div>
            <group>
                <switch title="关闭" :value='truefalse' @on-change="deletefilladdress"></switch>
            </group>
            <div style='background:white;'>
                <div style="width:60%;background:white;margin:0 auto;padding-top:20px;">
                    <x-button plain style='color:#4AB0F7;border:1px solid #4AB0F7'>添加成功</x-button>
                </div>
            </div>

        </div>
    </div>

    <div style="background-color:#EEEEEE;height:1000px;" v-if='isshowshipping'>
        <div style="border-bottom:1px solid #EEEEEE">
            <x-header style="background-color:#FFFFFF;">
                <div style='color:#333333'>收货地址</div>
            </x-header>
        </div>


        <div style="height:50px;background-color:white;" v-on:click='showfilladdress'>
            <div style="height:40px;width:92%;margin:15px auto 0px;">
                <div class='add-address' style="float:left;">
                    <i class="iconfont icon-zengjia">新增收货地址</i></div>
                <div class='add-address' style='float:right;'>
                    <i class="iconfont icon-right"></i>
                </div>
            </div>
        </div>

        <div class='renderaddresswrap'>
            <div style='width:92%;margin:0 auto;'>
                <div style='float:left;margin:10px 0'>1</div>
                <div style='float:right;margin:10px 0'>333333333333333</div>
            </div>
            <div style='border-bottom:1px solid #EEEEEE'>
                <div class='detail-address'>1111111111</div>
                <div class='detail-address'>122222222222</div>
            </div>
            <!--这是设置的 默认地址样式的-->
            <div  class='render-address'>
                <div style='float:left;font-size:10px;margin-top:7px;'>
                    <i class="iconfont icon-fangxingweixuanzhong" style='float:left;'></i>
                    <div style='float:left;margin-top:3px;'>默认地址</div>
                </div>
                <div style='float:right;font-size:10px;margin-top:5px;'>
                    <i class="iconfont icon-edit"></i>编辑
                    <i class="iconfont icon-delete"></i>删除
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import XButton from 'vux-components/x-button'
import XHeader from 'vux-components/x-header'
import Filladdress from './filladdress'
import Group from 'vux-components/group'
import Switch from 'vux-components/switch'
export default {
  components: {
    XHeader,Filladdress,Group,Switch,XButton
  },
  data () {
    return {
      truefalse:true,
      isshow:false,
      isshowshipping:true
    }
  },
  methods:{
    deletefilladdress:function(){
      this.isshow=false;
      this.isshowshipping=true
    },
    showfilladdress:function(){
      this.isshow=true;
      this.isshowshipping=false
    }
  }
}
</script>
<style>
/*详细地址*/
.detail-address{
  clear:both;
  width:92%;
  margin:0 auto;
}
/*新增收货地址包裹*/
.add-address{
  padding-top:14px;
  font-size:0.9rem;
  color:#4AB0F7;
}
/*默认地址的包裹*/
.renderaddresswrap{
  height:135px;
  background-color:white;
  margin-top:10px;
}
/*默认地址*/
.render-address{
  clear:both;
  width:92%;
  margin:0 auto;
}

.bounceInUpfilladdress {
 -webkit-animation:bounceInUp 0.8s;
 z-index:10;
}
.bounceInUp{
  animation-name:bounceInUp;
}
@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>