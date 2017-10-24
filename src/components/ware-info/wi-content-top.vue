<template>
	<div class="wi-content-top white" id="wictop">
		<div id="wict-slider" class="mui-slider" >
		  <div class="mui-slider-group mui-slider-loop">
		    <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
		    <div class="mui-slider-item mui-slider-item-duplicate">
		      <a href="#">
		        <img src="../../assets/jly-rice3.jpg">
		      </a>
		    </div>
		    <!-- 第一张 -->
		    <div class="mui-slider-item">
		      <a href="#">
		        <img src="../../assets/jly-rice1.jpg">
		      </a>
		    </div>
		    <!-- 第二张 -->
		    <div class="mui-slider-item">
		      <a href="#">
		        <img src="../../assets/jly-rice2 .jpg">
		      </a>
		    </div>
		    <!-- 第三张 -->
		    <div class="mui-slider-item">
		      <a href="#">
		        <img src="../../assets/jly-rice3.jpg">
		      </a>
		    </div>
		    <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
		    <div class="mui-slider-item mui-slider-item-duplicate">
		      <a href="#">
		        <img src="../../assets/jly-rice1.jpg">
		      </a>
		    </div>
		  </div>
		  <div class="mui-slider-indicator">
		    <div class="mui-indicator mui-active"></div>
		    <div class="mui-indicator"></div>
		    <div class="mui-indicator"></div>
		  </div>
		</div>
		<ul id="wict-info" class="white fontsilver">
			<li class="wict-H1"><h2 class="fontblack">{{witop.title}}</h2></li>
			<li class="wict-price fontRed">￥{{witop.skuSalePrice}}</li>
			<li><span>数量</span>
				<div class="mui-numbox fontblack" data-numbox-min='1' data-numbox-max='99'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
				<span class="lpadding-span">库存{{witop.skuStock}}件</span>
			</li>
			<li><span>已销售</span>{{witop.skuSales}}件</li>
			<li><span>服务</span>由“金龙鱼”提供销售和发货、并提供售后服务，售后电话：0512-66393889</li>
			<li><span class="redspan">限购</span>单笔限购99件</li>
			<li><span class="redspan">售后</span>包退7天，包换7天</li>
			<li><span class="redspan">包邮</span>全国配送</li>
		</ul>
		
	</div>
	
</template>

<script>
//	import axios from 'axios'
	export default{
//		data:function(){
//			return {
//				selectGoodsInfo:""
//			}
//		},
		props: ['witop'],
		mounted(){
//			var _this=this;
//			axios({
//				method:"get",
//				url:'http://192.168.1.106:7903/chinasofti.com/selectGoodsInfo?goodsCode=101'
//			}).then(function(data){
//				_this.$data.selectGoodsInfo=this.witop;
//			});
		}
	}
</script>

<style>
</style>