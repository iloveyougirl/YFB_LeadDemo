<template>
    <div>
        <div>{{mes}}</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            id:'',
            mes:''
            }
        },
        components:{
        },
        ready:function(){
          this.$http.get('/cache/flush')
                   .then((response) => {
                   this.$set('mes', response.data.msg)
                    })
                   .catch(function(response) {
                       console.log(response)
                   })
       }
       //else{
     //  this.sendParameter()
     //  }
    }
</script>
<style>
</style>