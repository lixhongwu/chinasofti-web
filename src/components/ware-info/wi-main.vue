<template>
	<div id="wimain" v-show="!!selectGoodsInfo">
		<wiheader></wiheader>
		<wicontentT :witop="selectGoodsInfo"></wicontentT>
		<wicontentB :wibottom="selectGoodsInfo"></wicontentB>
		<wifooter></wifooter>
	</div>
</template>

<script>
	import wiheader from '@/components/ware-info/wi-header'
	import wicontentT from '@/components/ware-info/wi-content-top'
	import wicontentB from '@/components/ware-info/wi-content-bottom'
	import wifooter from '@/components/ware-info/wi-footer'
	
	export default{
		data:function(){
			return {
				selectGoodsInfo:"",
				ids:''
			}
		},
		components:{
			wiheader,
			wicontentT,
			wicontentB,
			wifooter
		},
		created(){
			this.ids = this.$route.params.goodsCode;
			console.log('牛油果');
			console.log(this.ids);

		},
		mounted(){
			$(".footer").css("display","none");
			var _this=this;
			axios({
				method:"get",
				url:'http://192.168.1.109:7903/chinasofti.com/selectGoodsInfo?goodsCode='+this.ids
			}).then(function(data){
				_this.$data.selectGoodsInfo=data.data;
			});
		},
		destroyed(){
			$(".footer").css("display","block");
		}
	}
</script>

<style>
@import url("../../../static/css/wi-content-top.css");
@import url("../../../static/css/wi-content-bottom.css");
</style>