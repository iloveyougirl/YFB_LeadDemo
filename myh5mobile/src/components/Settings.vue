<template>
    <div style="background-color:#EEEEEE;height:1000px;">
        <div style="border-bottom:1px solid #EEEEEE">
            <x-header style="background-color:#FFFFFF;">
                <div style='color:#333333'>设置</div>
            </x-header>
        </div>

        <div style="height:180px;background-color:white;">
                <div style="height:160px;width:92%;margin:20px auto;">
                    <div style='height:80px;border-bottom:1px solid #EEEEEE'>
                        <div style='float:left;padding: 37px 0 0 16px;'>头像</div>
                        <div style='float:right;margin-top: 18px;'><img src='../assets/ball.png'></div>
                    </div>
                    <div style='border-bottom:1px solid #EEEEEE'>
                        <x-input :value.sync="nickname" title="昵称" :show-clear=false  text-align='right'></x-input>
                    </div>
                    <div style='border-bottom:1px solid #EEEEEE'>
                        <x-input :value.sync="gender" title="性别" :show-clear=false  text-align='right'></x-input>
                    </div>
                </div>
        </div>

        <div style="width:60%;background:white;margin:20px auto 0;">
            <x-button plain style='color:#4AB0F7;border:1px solid #4AB0F7'>保存修改</x-button>
        </div>
    </div>
</template>
<style>
</style>
<script>
import XHeader from 'vux-components/x-header'
import Cell from 'vux-components/cell'
import Group from 'vux-components/group'
import XInput from 'vux-components/x-input'

import XButton from 'vux-components/x-button'
export default{
   data(){
       return{
          nickname:'',
          gender:''
       }
   },
   components:{
    Cell,Group,XInput,XHeader,XButton
   }
}
</script>
