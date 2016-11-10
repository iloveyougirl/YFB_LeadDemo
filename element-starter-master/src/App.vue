<template>
    <div class='allWrap'>
        <div class='imgwrap'>
            <img src='http://1.s.pros.weiniudiandian.com/qzzg/img/model.png' alt=''>
        </div>
        <div class='first-input'>
            <p>选择系列</p>
            <el-select v-model="firstvalue" v-on:change="messageInputVal">
                <el-option
                        v-for="list in firstoptions[0]"
                        :label="list.name"
                        :value="list.id"
                        >
                </el-option>
            </el-select>
        </div>

        <div class='second-input'>
            <p>选择型号</p>
            <el-select v-model="secondvalue" v-on:change="messageInputValTwo">
                <el-option
                        v-for="item in InpVal"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <p>您已选择：{{checkName}}&nbsp;&nbsp;&nbsp;{{checkModel}}&nbsp;型号</p>
            <!--<a href="javascript:;" alt="" v-on:click='exam'><div class="view-instructions">查看说明书</div></a>-->
        </div>
        <div class='instructions'>
            <div class="viewInstructions" v-on:click="message">查看详细说明书>></div>
        </div>

        <div id="bombbox" v-if="ifshow">
            <div class='search-content' v-if="ifshow">
                <div class="closepage" v-on:click="closemessage">×</div>
                <p class='choosecontent'>您已选择：{{checkName}}&nbsp;&nbsp;&nbsp;{{checkModel}}</p>
                    <input type="text" placeholder="请输入正确的手机号"  id="land-username"
                           onkeyup="this.value=this.value.replace(/[^0-9]/g,'')"
                           onafterpaste="this.value=this.value.replace(/[^0-9]/g,'')"/>
                <div class="public-view-instructions" v-on:click='readviewInstructions'>查看说明书</div>
                <p class="btm-info">手机号仅用于查看说明书</p>
                <div id="errcontent"><div>
            </div>
        </div>


    </div>



</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
  export default {
    data() {
      return {
        checkModel:'',
        checkName:'',
        checkId:'',
        ifshow:false,
        secondoptions:[],
        firstoptions:[],
        firstvalue:'',
        secondvalue: '',
        isFirstLogin:true,
        Url:'/api/getstatus',
        item:{},
        InpVal:null,
        inputValue:null,
        threevalue:null,
        fourvalue:null,
        add:0
      }
    },
    watch:{
        'firstvalue':function(){
         this.add++
         console.log(this.add)
        }
    },
    mounted: function() {
          /*刚开始加载阶段*/
          this.$http.get('/api/series')
                       .then((response) => {
                       // this.$set('firstoptions', response.data)
                    this.firstoptions.push(response.data)
                    var itemlist= this.firstoptions[0]
                     this.firstvalue=itemlist[0].id
                     this.checkName=itemlist[0].name
                      this.$http.get('/api/series/'+this.firstvalue)
                       .then((response) => {
                       //console.log(response.data)
                     this.secondoptions.push(response.data)
                       this.InpVal=this.secondoptions[this.firstvalue-1]
                       //this.secondvalue=this.InpVal[0].name
                        this.secondvalue=this.InpVal[0].id
                        this.fourvalue=this.InpVal[0].id
                        console.log(this.fourvalue)
                        this.checkModel=this.InpVal[0].name
            })


                    //console.log(this.firstoptions)
            },(error)=>{console.log(error)})
                .catch(function(response) {
                    console.log(response)
                })

        this.getCustomers()
    },
    methods: {
       /*第二个input值里的数据改变*/
       messageInputValTwo:function(){
           var secondid = this.secondvalue;
           var itemstext = this.InpVal
           for(var i in itemstext){
                if(itemstext[i].id == secondid){
                    this.checkModel= itemstext[i].name;
                }
           }
           this.threevalue=secondid

       },
     /*点击第一个input内容改变发生的函数*/
       messageInputVal:function(){
           var id = this.firstvalue;
           //var add=0;
          // console.log()
           var items = this.firstoptions[0];
           for(var i in items){
                if(items[i].id == id){
                    this.checkName = items[i].name;
                }
           }
           //console.log(id);
           this.$http.get('/api/series/'+id)
                       .then((response) => {
                      // console.log(response.data)
                     this.secondoptions.push(response.data)
                     this.InpVal=this.secondoptions[this.add-1]
                       console.log(this.secondoptions[this.add-1])
                       //this.inputValue=this.firstvalue
                        this.secondvalue=this.InpVal[0].id
                         this.threevalue=this.secondvalue
                        this.checkModel=this.InpVal[0].name
            })
                .catch(function(response) {
                    console.log(response)
                })
       },
       /*第一次申请接口*/
       getCustomers: function() {
          this.$http.get(this.Url).then((response) => {
            // success callback
            //console.log(response.data)
            if(response.data.code == 200){
                this.isFirstLogin = false
            }
            else if(response.data.code==404){
                this.isFirstLogin = true
            }
          }, (response) => {
          });
        },
      /*点击判断*/
        message:function() {
            if(this.isFirstLogin){
                //需要弹框
                this.ifshow=true
            }
            else{
                //直接跳转
                if(this.threevalue==null){
                 this.targetpage(this.fourvalue)
                }
                else{this.targetpage(this.threevalue)}
            }
        },
        /*关闭按钮*/
        closemessage:function () {
            this.ifshow=false
        },

         /*电话号码判断*/
        readviewInstructions:function () {
            var inpEle = document.getElementById('land-username');
            var errcontent= document.getElementById('errcontent');
                // var myreg = /^1[3458]\d{9}$/;
            var myreg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            var inpVal = inpEle.value;
            if (!myreg.exec(inpVal)) {
                errcontent.innerHTML='*请输入正确的手机号'
            }else{
                errcontent.innerHTML='手机号正确';
                this.item={'phone_number':inpVal}
                this.createCustomer()
            }
        },

         /*传递电话号码*/
        createCustomer: function() {
			var vm = this
			vm.$http.post('/api/getphone', vm.item)
				.then((res) => {
				    if(res.data.code == 200){
				       if(this.threevalue==null){
                       this.targetpage(this.fourvalue)
                       }
                       else{this.targetpage(this.threevalue)}
				    }
				    else{
				        var inpEle = document.getElementById('land-username');
                        var errcontent= document.getElementById('errcontent');
                            errcontent.innerHTML='数据提交错误,请重试';
                        this.item = {}
				    }
				})
		},
		 /*说明书跳转地址*/
        targetpage:function (e)  {
            window.location.href='/product/'+e

        }
     }
  }
</script>
<style>
body{
    margin:0;
    background:#F2F2F2;
}
/*图片*/
.imgwrap{
    text-align:center;
}
.imgwrap img{
    max-width: 100%;
}
/*标题*/
.allWrap h1{
    text-align: center;
    font-size: 2rem;
    font-family: monospace;
    line-height: 5rem;
}
/*开头信息*/
.allWrap p{
    font-family: "Microsoft YaHei";
    font-size: 1rem;
    margin: 12px 0;
}

.first-input,.second-input,.instructions{
   width:80%;
   margin:0 auto;
}
/*查看说明书*/
.viewInstructions{
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    text-align: center;
    color: #FF8800;
    line-height: 2.5rem;
    /* background-color: #D2691E; */
    border: 1px solid #FF8800;
    /* margin: 22px auto 10px; */
    border-radius: 7px;
    cursor: pointer;
    font-family: "Microsoft YaHei";
}
   /*弹框*/
.search-content{
    position: relative;
    /* top: 200px; */
    top: 50%;
    left: 50%;
    margin-top: -95px;
    margin-left: -150px;
    text-align:center;
    background-color: white;
    width: 300px;
    height: 190px;
    /* margin: 0 auto; */
    overflow: hidden;
    border-radius: 7px;
    -webkit-animation: zoomIn 0.2s;

}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}


#land-username{
    position: relative;
    /* left: 50%; */
    /* margin-left: -125px; */
    /* margin-top: -18px; */
    /* margin: 40px 0 5px -125px; */
    width: 250px;
    height: 36px;
    font-size: 1em;
    text-indent: 1rem;
    border: 1px solid #DDD;
    box-sizing: border-box;
}
.public-view-instructions{
    position: relative;
    left: 50%;
    top: 41px;
    margin-left: -125px;
    margin-top: -18px;
    width: 250px;
    height: 36px;
    text-align: center;
    color: white;
    line-height: 36px;
    /* border: 1px solid #FF8800; */
    background-color: #FF8800;
    /* margin: 22px auto 10px; */
    cursor: pointer;
    font-family: "Microsoft YaHei";
}

.allWrap .btm-info{
    font-size: 0.9rem;
    position: relative;
    /* right: 38px; */
    text-align: left;
    text-indent: 23px;
    top: 30px;
    /* text-indent: 1.5rem; */
    /* margin-left: -125px; */
    /* margin-top: -18px; */
    color: darkgray;
}
 /*弹框 背景层*/
#bombbox{
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.7);
    height: 100%;
    width: 100%;
    z-index: 10;
}
/*关闭页面*/
.closepage{
    position: absolute;
    right: 6px;
    top: 2px;
    font-size: 25px;
    cursor: pointer;
    overflow: hidden;
    color:darkgray;
}
/*错误提示*/
#errcontent{
    position: relative;
    /* left: -111px; */
    top: -63px;
    text-align: left;
    text-indent: 23px;
    /* margin-left: -125px; */
    /* margin-top: 91px; */
    color: red;
    font-family: "Microsoft YaHei";
    /* width: 250px; */
    font-size: 0.8rem;
}
.el-input__inner{
    height:2.5rem;
}
</style>