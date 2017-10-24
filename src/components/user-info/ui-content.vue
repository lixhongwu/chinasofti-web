<template>
	<ul class="mui-table-view ui-content">
		<li class="mui-table-view-cell ui-content-touxian">
			商城头像
	       	<img src="../../assets/touxian.png"/>
		</li>
		<li class="mui-table-view-cell mui-collapse" id="uic-nichen">
            <a class="mui-navigate-right">
				商城昵称 
	            <span class="fontsilver">
	            	gogo
	            </span>
            </a>
            <div class="mui-collapse-content">
                <div class="mui-input-row">
					<input type="text" class="mui-input-clear" placeholder="昵称" value="gogo">
				</div>
				<button type="button" class="mui-btn mui-btn-warning mui-btn-block">保存</button>
            </div>
        </li>
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right" @click.prevent="showSexPicker">
				性别
            	<span class="fontsilver" id="sexRuselt">
	            	男
	            </span>
            </a>
        </li>
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right" @click.prevent="showDatePicker">
				出生日期
            	<span class="fontsilver" id="dateRuselt">
	            	1999-08-08
	            </span>
            </a>
        </li>
        <li class="mui-table-view-cell mui-collapse" id="uic-phone">
            <a class="mui-navigate-right">
				手机号码
            	<span class="fontsilver">
	            	13818398088
	            </span>
            </a>
            <div class="mui-collapse-content">
            	<h5>请输入手机号：</h5>
                <div class="mui-input-row">
					<input type="text" class="mui-input-clear" placeholder="手机号">
				</div>
					<input type="text" placeholder="请输入短信验证码" class="uic-sms">
					<button type="button" class="mui-btn mui-btn-warning">获取短信验证码</button>
				<button type="button" class="mui-btn mui-btn-warning mui-btn-block">保存</button>
            </div>
        </li>
        <li class="mui-table-view-cell mui-collapse" id="uic-default-address">
            <a class="mui-navigate-right">
				默认收货地址
            	<span class="fontsilver">
	            	广东省深圳市
	            </span>
            </a>
            <div class="mui-collapse-content fontsilver">
            	<form class="mui-input-group">
					<div class="mui-input-row">
						<label>家庭</label>
					</div>
					<div class="mui-button-row">
						<div class="mui-checkbox">
							<input value="Item 1" type="checkbox" checked="checked">
							<label>设为默认地址</label>
						</div>
						<button type="button" class="mui-btn mui-btn-warning" onclick="return false;">编辑</button>&nbsp;&nbsp;
						<button type="button" class="mui-btn mui-btn-danger" onclick="return false;">清空</button>
					</div>
				</form>
				<div>
					
				</div>
				<form class="mui-input-group">
					<div class="mui-input-row">
						<label>公司</label>
					</div>
					<div class="mui-button-row">
						<div class="mui-checkbox">
							<input value="Item 1" type="checkbox" >
							<label>设为默认地址</label>
						</div>
						<button type="button" class="mui-btn mui-btn-warning" onclick="return false;">编辑</button>&nbsp;&nbsp;
						<button type="button" class="mui-btn mui-btn-danger" onclick="return false;">清空</button>
					</div>
				</form>
				<button type="button" class="mui-btn mui-btn-block">更多</button>
            </div>
        </li>
	    </ul>
</template>

<script>
	import picker from '../../../static/js/mui.picker.min.js'
	import poppicker from '../../../static/js/mui.poppicker.js' 
	export default{
		data:function(){
			return{
				sex:['男','女'],
				sexPicker:"",
				sexRuselt:"",
				datePicker:"",
				dateRuselt:""
			}
		},
		mounted(){
			var _this=this;
			mui.init();
			mui.ready(function(){
				_this.$data.sexPicker = new mui.PopPicker();
				_this.$data.sexRuselt =document.getElementById("sexRuselt");
				_this.$data.sexPicker.setData(_this.$data.sex);
				_this.$data.datePicker = new mui.DtPicker({type:'date'}); 
				_this.$data.dateRuselt =document.getElementById("dateRuselt");
			})
		},
		methods:{
			showSexPicker:function(){
				var _this=this;
				this.$data.sexPicker.show(function(items) {
					_this.$data.sexRuselt.innerText = items[0];
				});
			},
			showDatePicker:function(){
				var _this=this;
				 this.$data.datePicker.show(function (selectItems) {
				 	_this.$data.dateRuselt.innerText=selectItems.y.text+"-"+selectItems.m.text+"-"+selectItems.d.text;
			    })
			}
		}
	}
</script>

<style>
	@import url("../../../static/css/mui.picker.min.css");
	@import url("../../../static/css/mui.poppicker.css");
	@import url("../../../static/css/ui-content.css");
</style>