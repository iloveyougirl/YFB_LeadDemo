<template>
    <div>
        <div class='recommendContent'>
            <div>
                <div>
                    <divider><span class="hot">hot</span><span style="color:black;">精选推荐</span></divider>
                </div>
            </div>

            <div>
                <flexbox >
                    <flexbox-item style="width:50%;">
                        <div class="flex-demo2">
                            <img src='https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'>
                            <div>中国电信流量包</div>
                            <div><i class="iconfont icon-jinbi">39积分</i></div>
                        </div>
                    </flexbox-item>
                    <flexbox-item style="width:50%;">
                        <div class="flex-demo2">
                            <img src='https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'>
                            <div><i class="iconfont icon-jinbi">39积分</i></div>
                        </div>
                    </flexbox-item>
                    <flexbox-item style="width:50%;">
                        <div class="flex-demo2">
                            <img src='https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'>
                            <div><i class="iconfont icon-jinbi">39积分</i></div>
                        </div>
                    </flexbox-item>
                </flexbox>

            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
  import Flexbox from 'vux-components/flexbox/flexbox'
  import FlexboxItem from 'vux-components/flexbox/flexbox-item'
  import Divider from 'vux-components/divider'
  import "./index.css"
    export default{
        data(){
            return{

            }
        },
        components:{
            Flexbox,FlexboxItem,Divider
        }
    }
</script>
