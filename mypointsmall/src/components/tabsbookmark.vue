<template>
    <div class='gamenavbar-wrap'>
        <ul class='gamenavbar'>
            <router-link to="bigpic" tag='li'>积分任务</router-link>
            <router-link to="bigpic" tag='li'>积分游戏</router-link>
            <li>签到送分</li>
            <li>夺宝奖励</li>
            <li>新浪游戏APP</li>
            <li>新手卡</li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<style>
/*.router-link-active{
    color:#FF4400;
}*/
.gamenavbar-wrap{
    width:720px;
    margin:0 auto;

}
.gamenavbar{
    margin-left: 18px;
}
.gamenavbar li{
    float: left;
    list-style: none;
    border: 1px solid black;
    padding: 12px;
    font-size: 21px;
    cursor: pointer;
}
.gamenavbar li:hover{
    color: #FF4400;
    border-top:3px solid #FF4400;
    font-family:'Microsoft Yahei';
    font-weight:bold;
    padding-bottom:7px;
}
</style>
<script>
    export default{
        data(){
            return{
            }
        },
        components: {
        }
    }
</script>
