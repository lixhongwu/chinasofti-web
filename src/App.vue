<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import "./common/css/reset.css";
import footer from './components/footer/footer.vue';
export default {
  name: 'app',
  components:{
      'v-footer': footer
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
