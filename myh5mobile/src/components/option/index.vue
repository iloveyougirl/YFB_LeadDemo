<template>
    <div>
        <div class='someicon'>
            <flexbox>
                <flexbox-item v-link="{path: '/Usercenter'}">
                    <div class='someiconstyle'>
                        <div class="iconfont icon-wo" style='font-size:35px;color:#FC8C47;'></div>
                    </div>
                    <div class="flex-demo">我的</div>
                </flexbox-item>
                <flexbox-item>
                    <div class='someiconstyle'>
                        <div class="iconfont icon-jifenpaiming" style='font-size:35px;color:#6BC526;'></div>
                    </div>
                    <div class="flex-demo">流量兑换</div>
                </flexbox-item>
                <flexbox-item>
                    <div class='someiconstyle'>
                        <div class="iconfont icon-duihuanzhongxin" style='font-size:35px;color:#37A3EE;'></div>
                    </div>
                    <div class="flex-demo">积分排行</div>
                </flexbox-item>
                <flexbox-item v-link="{path:'/Exchangecenter'}">
                    <div class='someiconstyle'>
                        <div class="iconfont icon-duihuan" style='font-size:35px;color:#FCB643;'></div>
                    </div>
                    <div class="flex-demo">兑换中心</div>
                </flexbox-item>
                <flexbox-item v-link="{path:'/Exchangecenter'}">
                    <div class='someiconstyle'>
                        <div class="iconfont icon-zuorenwuzhuanjifen" style='font-size:35px;color:#FC6265;'></div>
                    </div>
                    <div class="flex-demo">赚积分</div>
                </flexbox-item>
            </flexbox>
        </div>
        <div class='containerbox'>
            <div style='float:left;margin-right:11px;'>
                <div class="iconfont icon-toutiao"></div>
            </div>
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
</template>
<style>
</style>
<script>
/*插件*/
import Flexbox from 'vux-components/flexbox/flexbox'
import FlexboxItem from 'vux-components/flexbox/flexbox-item'
import "./index.css"
    export default{
        data(){
            return{

            }
        },
        components:{
         Flexbox, FlexboxItem
        }
    }
</script>
