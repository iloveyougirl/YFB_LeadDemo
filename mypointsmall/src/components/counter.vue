<template>
    <span class='orange'>倒计时:{{time}}</span>
</template>
<script>
export default{
	data(){
		return {
			time: '',
			now:new Date().getTime()
		};
	},
	props: ['endtime'],
	methods:{
		formate(time){
		    let day= Math.floor(time/1000/60/60/24);
		    time-=day*(1000*60*60*24);
			let hour =Math.floor(time/1000/60/60)
			time-=hour*60*60*1000;
			let min = Math.floor(time/1000/60);
			time-=min*60*1000;
			let sec = parseInt(time/1000)
			return day+'天'+hour + '小时' + min + '分钟' + sec + '秒';
		}
	},
	computed:{
		'time': function(){
			return this.formate(new Date(this.endtime).getTime() - this.now);
		}
	},
	mounted(){
		let self = this;
		setInterval(function(){
			self.now = new Date().getTime();
		},1000);
	}
}
</script>
<style>
.orange{
	color: orange;
}
</style>
