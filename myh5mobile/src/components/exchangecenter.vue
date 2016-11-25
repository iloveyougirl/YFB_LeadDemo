<template>
    <div style="background-color:#EEEEEE;">
        <div style="border-bottom:1px solid #EEEEEE">
            <x-header style="background-color:#FFFFFF;" :left-options="{showBack: false}">
                <div style='color:#333333'>兑换中心</div>
            </x-header>
        </div>
        <div>
            <tab>
                <tab-item v-link="{path:'/Exchangecenter/'}"
                        :selected="choosestyle === '商品兑换'" @click="choosestyle = '商品兑换'">商品兑换</tab-item>
                <tab-item v-link="{path:'/Exchangecenter/Promotions'}"
                        :selected="choosestyle  === '优惠活动'" @click="choosestyle  = '优惠活动'">优惠活动</tab-item>
                <tab-item v-link="{path:'/Exchangecenter/Redeem'}"
                        :selected="choosestyle  === '积分兑换'" @click="choosestyle  = '积分兑换'">积分兑换</tab-item>
                <tab-item v-link="{path:'/Exchangecenter/WeChatexptext'}"
                        :selected="choosestyle  === '微信爆文'" @click="choosestyle  = '微信爆文'">微信爆文</tab-item>
            </tab>
        </div>
        <div style='margin-top:10px;'>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import XHeader from 'vux-components/x-header'
import {Tab,TabItem} from 'vux-components'
export default {
  components: {
    XHeader,Tab,TabItem
  },
  data () {
    return {
         choosestyle:'商品兑换'
    }
  }
}
</script>