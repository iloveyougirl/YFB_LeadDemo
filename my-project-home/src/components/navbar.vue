<template>
<div class='navbg'>
    <div class='navlogo fl'>LOGO</div>
    <div class='navlist fl'>
        <ul>
            <li style="color:white" v-link="{path: '/home'}">首页</li>
            <li v-link="{path: '/manage'}">网址管理</li>
            <li v-link="{path: '/statistics'}">访问统计</li>
            <li v-link="{path: '/details'}">访问明细</li>
            <li>清空缓存</li>
        </ul>
    </div>
    <div class='fl prohelp'>帮助</div>
</div>
</template>
<script>

</script>
<style>
/*公共部分*/
.fl{
   float:left;
}
.fr{
   float:right;
}


/*导航部分*/
.navbg{
   height:40px;
   background-color:#3F3F3F;
   padding:20px 80px 10px;
   margin-bottom: 40px
}
.navlogo{
    width: 138px;
    height: 30px;
    background-color: #979797;
    color: white;
    text-align: center;
    line-height: 30px;
    /* cursor: pointer; */
    border-radius: 5px;
    font-size:14px;
}
.navlist{
   width: 1429px;
}
.navlist ul li{
    float: left;
    list-style: none;
    color: #939393;
    line-height: 30px;
    font-size: 14px;
    padding-left: 153px;
    cursor: pointer;
}
.prohelp{
    line-height: 31px;
    color: #939393;
    font-size: 14px;
}
</style>