<template>
    <div class='publicwidth'>
        <div class='fl'>
            <span>站点id：</span>
            <input type="text" class='id-input' placeholder="请输入"/>
        </div>
        <div class='fl'>
            <span>站点参数：</span>
            <input type="text" class='id-input' placeholder="请输入"/>
        </div>
        <div class='fl'>
            <span>设备</span>
            <input type="text" class='id-input' placeholder="请输入"/>
        </div>
        <div class='fl'>
            <span>系统</span>
            <input type="text" class='id-input' placeholder="请选择"/>
        </div>
        <div class='calendarwrap fl'>
            <span style="display: block;float: left;padding-top: 19px;">访问时间：</span>
            <div class='fr'>
                <calendar-a></calendar-a>
            </div>
        </div>
    </div>
    <div class="wrap">
        <div class="publicwidth">


            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>访问时间</th>
                    <th>名称/id</th>
                    <th>IP</th>
                    <th>参数</th>
                    <th>浏览器</th>
                    <th>系统</th>
                    <th>设备</th>
                    <th>次数</th>
                    <th>更新时间</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in gridDataThree">
                    <td v-text="item.id" class="public-id"></td>
                    <td v-text="item.name" class="public-name"></td>
                    <td v-text="item.short_url" class="public-shorturl"></td>
                    <td class="public-jumpaddress"><a href="javascript:;">点击查看</a></td>
                    <td class="public-today">{{item[1].pv}}/{{item[1].uv}}</td>
                    <td class="public-yesterday">{{item[0].pv}}/{{item[0].uv}}</td>
                    <td class="public-compute">
                        <ul>
                            <li><a href="javascript:;" v-link="{path: '/statistics'}">统计</a></li>
                            <li><a href="javascript:;" class="public-something">明细</a></li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Pagination url='http://redirect.w2.youfen8.com/api/jumpurls' v-on:child-message='listenToMyBoyThree'></Pagination>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Pagination from './pagination'
import calendarA from './calendar2'
export default {
  data () {
    return {
      gridDataThree: []

    }
  },
  components: {
    Pagination, calendarA
  },
  methods: {
    listenToMyBoyThree:function(e){
       this.gridDataThree=e
        }
  }
}
</script>

<style >
</style>