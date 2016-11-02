<template>
  <div class="wrap">
       <div class="publicwidth">
          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>名称</th>
              <th>短网址</th>
              <th>跳转网址</th>
              <th>今日 PV/UV</th>
              <th>昨日 PV/UV</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in gridData">
              <td v-text="item.id" class="public-id"></td>
              <td v-text="item.name" class="public-name"></td>
              <td v-text="item.short_url" class="public-shorturl"></td>
              <td class="public-jumpaddress"><a href="javascript:;" v-on:click="viewJumpaddress">点击查看</a></td>
              <td class="public-today">{{item[1].pv}}/{{item[1].uv}}</td>
              <td class="public-yesterday">{{item[0].pv}}/{{item[0].uv}}</td>
              <td class="public-compute">
                <ul>
                  <li><a href="javascript:;" v-link="{path: '/statistics'}">统计</a></li>
                  <li><a href="javascript:;" class="public-something" v-link="{path: '/details'}">明细</a></li>
                </ul>
              </td>
            </tr>
            </tbody>
           </table>
       </div>
    </div>
  <div class='jumpwrap' v-if="isShow">
    <div class='delete' v-on:click="deleteJumpaddress">×</div>
    <div class="fl junp-address">
      <div class="fl search-id">跳转地址：</div>
      <input type="text" class="fl " placeholder="http(s)://"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'


Vue.use(VueResource)
export default {
  data () {
    return {
      isShow:false,
      gridData: [],
      apiUrl: 'http://redirect.w2.youfen8.com/api/jumpurls'
    }
  },
  ready: function() {
            this.getCustomers()
  },
  methods: {
     /*删除调转地址*/
      deleteJumpaddress: function () {
           this.isShow=false
      },
      /*查看调转地址*/
      viewJumpaddress: function () {
           this.isShow=true
      },
      /*页面加载完接收数据*/
      getCustomers: function() {
           this.$http.get(this.apiUrl)
           .then((response) => {
            this.$set('gridData', response.data)
            })
            .catch(function(response) {
                console.log(response)
             })
            }
  }
}
</script>

<style >
*  {
    margin:0;
    padding:0;
}
/*公共部分*/
.publicwidth{
   width:1200px;
   margin:0 auto;
}
.fl{
  float:left;
}
.fr{
  float:right;
}



.wrap{
   clear:both;
   margin-top:120px;
}

 /*表格*/
table {
    border-collapse: collapse;
    width:1200px;
    border: none;
    margin:0 auto;
}
tbody td ,thead th {
    border: 1px solid #E0E0E0;
}
thead th {
    text-align: left;
    padding: 12px 8px;
    font-family: "Microsoft YaHei";
    background-color: #F4F4F4;
    font-size: 14px;
}
tbody td{
    padding: 12px 8px;
    font-size:13px;
}
 /*内容*/
.public-jumpaddress a{
    text-decoration: none;
    color:cornflowerblue;
}
.public-compute ul li{
    list-style:none;
    float:left;
    padding-right:5px;
}
.public-compute ul li a{
    text-decoration: none;
    font-size:13px;
    color:cornflowerblue;
}
 /*弹框*/
.jumpwrap{
    position:relative;
    top:-243px;
    width: 427px;
    border: 1px solid #f3f3f3;
    height: 215px;
    /* text-align: center; */
    margin: 0 auto;
    line-height: 180px;
    background-color: black;
    opacity: 0.3;
    border-radius: 7px;
    padding-left: 31px;
    z-index: 10;
}
.junp-address input{
    position: absolute;
    top: 85px;
    width: 326px;
    height: 25px;
    border: 1px solid #e0e0e0;
    border-radius: 7px;
    padding-left: 10px;
    /* padding-top: 7px; */
    outline: none;
}
.delete{
    position: absolute;
    right: 6px;
    top: -72px;
    font-size: 39px;
    cursor: pointer;
}
</style>
