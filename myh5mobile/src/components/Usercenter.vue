<template>
  <div style="background-color:#EEEEEE;">
    <div style="border-bottom:1px solid #EEEEEE">
        <x-header style="background-color:#FFFFFF;">
           <div style='color:#333333'>个人中心</div>
        </x-header>
    </div>

    <div class='userbg'>
    </div>

    <div>
        <group>
           <cell title='兑换中心' is-link v-link="{path: '/Exchangecenter'}">
               <i slot="icon" class="iconfont icon-form" style='font-size:20px;color:cornflowerblue;margin-right:5px'></i>
           </cell>
           <cell title="兑换记录" is-link>
               <i slot="icon" class="iconfont icon-wodedingdan" style='font-size:20px;color:cadetblue;margin-right:5px'></i>
           </cell>
           <cell title="收货地址" is-link v-link="{path: '/Shippingaddress'}">
               <i slot="icon" class="iconfont icon-zengjia" style='font-size:20px;color:cornflowerblue;margin-right:5px'></i>
           </cell>
        </group>
    </div>
    <div style="">
      <group>
        <cell title="设置" is-link v-link="{path: '/Settings'}">
            <i slot="icon" class="iconfont icon-shezhi" style='font-size:20px;color:cornflowerblue;margin-right:5px'></i>
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

<style scoped>
.userbg{
  background:white;
  height:90px;
  width:100%;
  margin:16px 0px;
}
</style>
