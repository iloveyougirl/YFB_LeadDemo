<template>
    <div>
        <div class="publicwidth">
            <!--<div>
                <div class="search-content">
                    <div class="fl search-id">站点id：</div>
                    <input type="text" class="fl" placeholder="请输入"/>
                </div>
                <div>
                    <span>访问时间：</span>
                    <div>
                        <calendar-a></calendar-a>
                    </div>
                </div>
                <div class="filtercontent">筛选</div>
            </div>-->

            <div class='public-wrap'>
                <div class='fl'>
                    <span>站点id：</span>
                    <input type="text" class='id-input' placeholder="请输入"/>
                </div>
                <div class='calendarwrap fl'>
                    <span>访问时间：</span>
                    <div class='fr'>
                        <calendar-a></calendar-a>
                    </div>
                </div>
                <button class='sub'>筛选</button>
            </div>

            <table>
                <thead>
                <tr>
                    <th>统计时间</th>
                    <th>名称</th>
                    <th>短网址</th>
                    <th>PV/UV</th>
                    <th>安卓UV</th>
                    <th>苹果UV</th>
                    <th>其他UV</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in grid">
                    <td v-text="item.days" class="public-id"></td>
                    <td v-text="item.jump_url.name" class="public-name"></td>
                    <td v-text="item.jump_url.short_url" class="public-shorturl"></td>
                    <td class="public-today">{{item.pv}}/{{item.uv}}</td>
                    <td  class="public-yesterday">{{Math.round( item.Android/ item.uv * 10000) / 100.00 + "%"}}({{item.Android}})</td>
                    <td>{{Math.round(item.iOS_uv/ item.uv * 10000) / 100.00 + "%"}}({{item.iOS_uv}})</td>
                    <td>{{Math.round(item.other_uv/ item.uv * 10000) / 100.00 + "%"}}({{item.other_uv}})</td>
                    <td class="public-compute">
                        <ul>
                            <li><a href="javascript:;" class="public-something" v-link="{path: '/details'}">明细</a></li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Pagination url='http://op.redirect.w2.youfen8.com/api/statistic/' v-on:child-message='listenToMyBoyTwo'></Pagination>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import calendarA from './calendar2'
import Pagination from './pagination'
export default {
  data () {
    return {
      grid: []
    }
  },
  components:{
      calendarA, Pagination
  },
  methods: {
      listenToMyBoyTwo:function(e){
       this.grid=e
       console.log(e)
        }
  }
}
</script>

<style >
.id-input{
    margin: 10px;
    border-radius: 7px;
    border: 1px solid #dedede;
    padding: 10px;
    font-size: 14px;
    padding-left: 36px;
    color: #666;
    height: 10px;
    width: 326px;
}
.sub{
    padding:5px 10px;
    color:white;
    background-color:cornflowerblue;
    border:1px solid cornflowerblue;
    border-radius:4px;
    cursor: pointer;
}
.search-time{
   line-height:37px;
}
.filtercontentone{
    position:relative;
    left: 459px;
    top: -39px;
}
.public-wrap{
    height:52px;
    line-height:52px;
    margin-bottom:20px;
}
.calendarwrap{
    width:480px;
}
</style>

