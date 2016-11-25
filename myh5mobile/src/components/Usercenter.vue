<template>
  <div style="background-color:#EEEEEE;">
    <div style="border-bottom:1px solid #EEEEEE">
        <x-header style="background-color:#FFFFFF;">
           <div style='color:#333333'>个人中心</div>
        </x-header>
    </div>

    <div class='userbg'></div>

    <div>
        <group>
           <cell title="兑换中心" is-link v-link="{path: '/Exchangecenter'}">
             <img slot="icon" width="20" style="display:block;margin-right:5px" src='../assets/ball.png'>
           </cell>
           <cell title="兑换记录" is-link>
             <img slot="icon" width="20" style="display:block;margin-right:5px" src='../assets/ball.png'>
           </cell>
           <cell title="收货地址" is-link v-link="{path: '/Shippingaddress'}">
             <img slot="icon" width="20" style="display:block;margin-right:5px" src='../assets/ball.png'>
           </cell>
        </group>
    </div>
    <div style="">
      <group>
        <cell title="设置" is-link v-link="{path: '/Settings'}">
           <img slot="icon" width="20" style="display:block;margin-right:5px" src='../assets/ball.png'>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
import XHeader from 'vux-components/x-header'
import Cell from 'vux-components/cell'
import Group from 'vux-components/group'
export default {
  data () {
    return {
    }
  },
  components:{
   XHeader, Cell,Group
  }
}
</script>

<style>
.userbg{
  background:#333333;
  height:110px;
  width:100%;
  margin:16px 0px;
}
</style>
