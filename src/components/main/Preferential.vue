<template>
	<div class="Preferential margins">
		<div class="headers mui-bar-nav mui-bar white">
			<span class="line  mui-pull-left"></span>
			<button class="mui-btn mui-btn-link mui-pull-left">
				
				<span class="fontH fontblack">特惠精选</span>
			</button>
			<button class="mui-btn mui-btn-link mui-pull-right">
				<span class="fontsilver fontsmall">更多</span>
			</button>
		</div>
		
		<div class="Pcontent mui-slider white">
		  <div class=" mui-slider-group">
		    
		    <div class="mui-slider-item floatin">
		      <div>
		      	<img src="../../assets/commodity1.jpg"/>
		      </div>
		      <div>
		      	 <p class="fontblack">LV-限量包8折</p>
		      	 <p><span class="fontH fontRed">￥160.00</span><span class="textline-through">￥200.00</span></p>
		      </div>
		    </div>
		    
		    <div class="mui-slider-item floatin">
		      <div>
		      	<img src="../../assets/commodity2.jpg"/>
		      </div>
		      <div>
		      	 <p class="fontblack">LV-限量服装8折</p>
		      	 <p><span class="fontH fontRed">￥160.00</span><span class="textline-through">￥200.00</span></p>
		      </div>
		    </div>
		    
		    <div class="mui-slider-item floatin">
		      <div>
		      	<img src="../../assets/commodity3.jpg"/>
		      </div>
		      <div>
		      	 <p class="fontblack">LV-限量床8折</p>
		      	 <p><span class="fontH fontRed">￥160.00</span><span class="textline-through">￥200.00</span></p>
		      </div>
		    </div>
		    
		   <div class="mui-slider-item floatin">
		      <div>
		      	<img src="../../assets/commodity4.jpg"/>
		      </div>
		      <div>
		      	 <p class="fontblack">LV-限量旅行包8折</p>
		      	 <p><span class="fontH fontRed">￥160.00</span><span class="textline-through">￥200.00</span></p>
		      </div>
		    </div>
		    
		  </div>
		</div>
	</div>
</template>

<script>
	import mui from '../../../static/js/mui.min.js'
</script>

<style>
.Pcontent>div{
	padding: 0.571428rem 0;
}
.floatin{
	padding:0 0.571428rem;
	width: 70% !important;
	border-right:0.074285rem solid silver;
}
.floatin:last-child{
	border-right: 0;
}
.floatin>div{
	float: left;
}
.floatin>div:first-child{
	width: 30%;
}
.floatin>div:nth-child(2){
	padding:0.571428rem 0.571428rem;
}
.floatin>div p:nth-child(1){
	padding-bottom: 0.571428rem;
}
.floatin>div span:nth-child(1){
	padding-right: 0.571428rem;
}
</style>