<template>
    <div style='margin-left: 18px;'>
        <div style='float:left;'>
            <div class='bigpicimg'>
                <img src="../assets/logo.png">
            </div>
            <div>
                <div style='width:300px;'>
                    <div class='bigpictitle'>【领卡激活】《问道》 呼风唤雨至</div>
                    <div class='bigpicremark'>20000积分</div>
                </div>
                <div style='width:300px;clear:both;' class='bigpic-list'>
                    <ul>
                        <li  v-for='item in listdata' v-if='item.endTime'>
                            任务剩余时间：<counter :endtime='item.endTime'></counter>
                        </li>
                        <li v-else>
                            {{item.text}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div style='float:right;padding-right:30px;'>
            <div class='bigpicimg'>
                <img src="../assets/logo.png">
            </div>
            <div>
                <div style='width:300px;'>
                    <div class='bigpictitle'>【领卡激活】《问道》 呼风唤雨至</div>
                    <div class='bigpicremark'>20000积分</div>
                </div>
                <div style='width:300px;clear:both;' class='bigpic-list'>
                    <ul>
                        <li  v-for='item in listdata' v-if='item.endTime'>
                            任务剩余时间：<counter :endtime='item.endTime'></counter>
                        </li>
                        <li v-else>
                            {{item.text}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div class='bigpicimg'>
                <img src="../assets/logo.png">
            </div>
            <div>
                <div style='width:300px;'>
                    <div class='bigpictitle'>【领卡激活】《问道》 呼风唤雨至</div>
                    <div class='bigpicremark'>20000积分</div>
                </div>
                <div style='width:300px;clear:both;' class='bigpic-list'>
                    <ul>
                        <li  v-for='item in listdata' v-if='item.endTime'>
                            任务剩余时间：<counter :endtime='item.endTime'></counter>
                        </li>
                        <li v-else>
                            {{item.text}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<style>
.bigpicimg img{
   width:330px;
   height:230px;
}
.bigpictitle{
   float:left;
}
.bigpicremark{
   float:right;
}
.bigpic-list li{
   list-style:none;
}
</style>
<script>
import Counter from './counter'
     export default{
        data () {
            return {
               listdata:[{
                              'text': 2,
                              'endTime': '2016/12/18 16: 09'
                           }]
            }
        },
        components: {
        Counter
        },
     }
</script>
