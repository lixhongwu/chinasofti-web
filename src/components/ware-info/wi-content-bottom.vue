<template>
	<div id="wicbottom" class="wi-content-bottom">
		<div class="mui-segmented-control mui-segmented-control-inverted  mui-segmented-control-negative white">
			<a class="mui-control-item mui-active" href="#wicb-ware">商品详情</a>
			<a class="mui-control-item" href="#wicb-seller">商户介绍</a>
			<a class="mui-control-item" href="#wicb-guarantee">售后说明</a>
		</div>
		<div id="wicb-ware" class="mui-control-content mui-active white fontsmall">
			<div>
				<p class="boderbottom">规格：{{wibottom.params}}</p>
			</div>
			<div>
				<p>{{wibottom.contents}}</p>
			</div>
			<div>
				<img src="../../assets/jly-info1.jpg"/>
			</div>
			<div>
				<img src="../../assets/jly-info2.jpg"/>
			</div>
			<div>
				<img src="../../assets/jly-info3.jpg"/>
			</div>
			<div>
				<img src="../../assets/jly-info4.jpg"/>
			</div>
			<div>
				<img src="../../assets/jly-info5.jpg"/>
			</div>
			<div>
				<img src="../../assets/jly-info6.jpg"/>
			</div>
			<div>
				<img src="../../assets/jly-info7.jpg"/>
			</div>
		</div>
		
		<div id="wicb-seller" class="mui-control-content white fontsmall">
			<!--<p>
       益海嘉里是丰益国际在华投资的全资子公司，是世界知名的小包装油生产商之一。在中国境内 35 个城市设有企业110多家，在大型货运枢纽附近建立61个生产基地，现在益海嘉里规模宏大的生产、销售和物流网络，覆盖了中国多个省、市、自治区的2839个县市，拥有近350个销售处，1585个经销商5000多家分销商，超过100万个终端保证供应。
			</p>
			<p>	
       产品涵盖了小包装食用油、大米、面粉、挂面、调味品、牛奶、豆奶、餐饮用油、特种油脂、油脂化工等10大领域，旗下16个品牌在金龙鱼的带领下，都已成为每一个专业领域内的知名品牌。
			</p>
			<p>	
       创新是发展的灵魂，是动力，更是一种责任。为了满足全球消费者日益多元化的健康需求，丰益国际在上海设立全球研发中心，益海嘉里在母公司的全力支持下，与200多所高校和5个世界著名食品和营养权威学会展开合作，与多个跨国食品巨头建立战略合作伙伴关系，用引领全球的智慧与科技将全世界先进前沿的科研成果融汇成每一滴油、每一粒米，让消费者享受到益海嘉里这个大家庭带来的快乐、温暖和关爱。
			</p>-->
			<p>{{wibottom.skuOptionNames}}</p>
		</div>
		
		<div id="wicb-guarantee" class="mui-control-content fontsmall">
			<div class=" white">
				<!--<div class="guarantee-title">
					<span class="title-text fontsilver">
						说明
					</span>
				</div>-->
				<div>
					<!--<p>1、划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
					<p>2、折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>
					<p>3、异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>-->
					<p>{{wibottom.inventorys}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
//		data:function(){
//			return {
//				selectGoodsInfo:""
//			}
//		},
		props: ['wibottom'],
		mounted(){
//			var _this=this;
//			axios({
//				method:"get",
//				url:'http://192.168.1.106:7903/chinasofti.com/selectGoodsInfo?goodsCode=101'
//			}).then(function(data){
//				_this.$data.selectGoodsInfo=this.wibottom;
//			});
		}
	}	
</script>

<style>
</style>