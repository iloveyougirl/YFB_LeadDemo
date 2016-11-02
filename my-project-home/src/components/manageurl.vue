<template>
    <div class="wrap">

        <div class="search-head publicwidth">
            <div class="fl add" v-link="{path: '/jump'}">添加</div>
            <div class="fr search-content">
                <div class="fl search-id">网址名称/id：</div>
                <input type="text" class="fl" id="useValue" placeholder="请输入"/>
                <div class="filtercontent fr" v-on:click="filterId">筛选</div>
            </div>
        </div>


        <div class="publicwidth">
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>短网址</th>
                    <th>跳转网址</th>
                    <th>创建时间</th>
                    <th>更新时间</th>
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
                            <li><a href="javascript:;" v-link="{path: '/jump'}">修改</a></li>
                            <li><a href="javascript:;" v-link="{path: '/statistics'}">统计</a></li>
                            <li><a href="javascript:;" class="public-something" v-link="{path: '/details'}">明细</a></li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            <div >
                <Pagination url='http://redirect.w2.youfen8.com/api/jumpurls' v-on:child-message='listenToMyBoy'></Pagination>
        </div>
    </div>



    <div class='jumpwrap' v-if="isShow">
        <div class='delete' v-on:click="deleteJumpaddress">×</div>
        <div class=""></div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Pagination from './pagination'
export default {
  data () {
    return {
      isShow:false,
      gridData: [],
      postval:{},
      apiUrl: 'http://redirect.w2.youfen8.com/api/jumpurls'
    }
  },
  //ready: function() {
          //  this.getCustomers()
 // },
 // methods: {
      /*页面加载完接收数据*/
  //    getCustomers: function() {
  //         this.$http.get(this.apiUrl)
   //        .then((response) => {
    //        this.$set('gridData', response.data)
    //        })
     //       .catch(function(response) {
     //           console.log(response)
      //       })
      //      }
 // },
  components: {
    Pagination
  },
  methods:{
    /*id或名字筛选*/
    getValByIdName: function() {
         this.$http.post(this.apiUrl,this.postval)
          .then((response) => {
            this.$set('gridData', response.data)
           })
          .catch(function(response) {
                console.log(response)
             })
          },
   /*删除调转地址*/
    deleteJumpaddress: function () {
           this.isShow=false
      },
      /*查看调转地址*/
    viewJumpaddress: function () {
           this.isShow=true
      },
    listenToMyBoy:function(e){
       this.gridData=e
       console.log(this.gridData)
    },
    filterId:function(){
       var getvalue=document.getElementById('useValue').value;
       this.postval={'key':getvalue}
       this.getValByIdName()
    }
  }
}
</script>

<style>


/*搜索部分*/
.search-head{
    height: 55px;
}
.add,.filtercontent{
    width: 60px;
    height: 26px;
    background-color: #23c0fa;
    border-radius: 7px;
    color: white;
    text-align: center;
    line-height: 26px;
    font-size: 13px;
    cursor: pointer;
}
.search-content{
    width:500px;
}
.search-id{
    font-size: 10px;
    font-family: inherit;
    color: gray;
    padding-top: 7px;
}
.search-content input{
    width: 326px;
    height: 25px;
    border: 1px solid #e0e0e0;
    border-radius: 7px;
    padding-left:10px;
    outline: none;
}
.jumpjump{
    margin-left:-100px;
}


</style >