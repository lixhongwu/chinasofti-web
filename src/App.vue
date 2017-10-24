<template>
  <div id="app">
    <router-view v-bind:seller="seller"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import "./common/css/reset.css";
import footer from './components/footer/footer.vue';

export default {
    data(){
        return {
            seller:[]
        }
    },
  name: 'app',
  components:{
      'v-footer': footer
  },
  created(){
    var _than = this;
    axios.get('http://192.168.1.109:7903/chinasofti.com/selectGoodsClass/')
        .then(function (res){ 
        _than.seller = res.data;
        console.log('111111111111111');
        console.log(_than.seller);
    }, function (res) { 
        console.log(2);
        console.log(res) 
     }); 
    } 
  }
</script>

<style>
	.white{
			background-color: white;
		}
	.fontH{
		font-size: 1.142857rem;
	}
	.fontblack{
		color: black;
	}
	.fontsilver{
		color: silver;
	}
	.fontsmall{
		font-size: 0.342857rem;
	}
	.fontRed{
		color: red;
	}
	.textline-through{
		text-decoration:line-through;
	}
	.line{
		display: inline-block;
		width: 0.285714rem;
		background-color: red;
		height: 60%;
		position: relative;
		top:20%;
		margin-right: 0.571428rem;
	}
	.brc{
		border-radius:1.142857rem;
		background-color: red;
		padding: 0.285714rem;
		color: white;
		font-size: 0.342857rem;
	}
</style>
