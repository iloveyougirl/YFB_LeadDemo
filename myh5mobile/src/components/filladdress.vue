<template>
    <div style="background-color:#EEEEEE;">
        <div style="border-bottom:1px solid #EEEEEE">
            <x-header style="background-color:#FFFFFF;" :left-options="{showBack: false}">
                <div style='color:#333333'>填写地址</div>
            </x-header>
        </div>

        <div style="background-color:#EEEEEE;border-bottom:1px solid rgba(0,0,0,0.1);">
            <group>
                <div style="border-bottom:1px solid #EEEEEE">
                    <x-input :value.sync="receiver" title="收货人" style='font-size:0.9em;' ></x-input>
                </div>
                <div style="border-bottom:1px solid #EEEEEE">
                    <x-input :value.sync="telephone" title="联系电话" style='font-size:0.9em;'></x-input>
                </div>
                <div style="border-bottom:1px solid #EEEEEE">
                    <address title="所在地区" :value.sync="value" :list="addressData"></address>
                </div>
                <div>
                    <x-textarea :max="80" :show-counter="false" :rows='2'></x-textarea>
                </div>
            </group>
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
import XTextarea from 'vux-components/x-textarea'
import {Address,AddressChinaData} from 'vux-components'
    export default{
        data(){
            return{
            receiver:'',
            telephone:'',
            value: [],
            addressData: AddressChinaData
            }
        },
        components:{
        Cell,Group,XInput,XHeader,Address,XTextarea
        }
    }
</script>
