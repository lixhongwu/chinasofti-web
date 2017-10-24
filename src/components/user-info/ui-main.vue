<template>
	<div id="ui-main">
		<uinav></uinav>
		<uicontent></uicontent>
		<mainfooter></mainfooter>
	</div>
</template>

<script>
	import uinav from '@/components/user-info/ui-nav'
	import uicontent from '@/components/user-info/ui-content'
	import mainfooter from '@/components/footer/footer'
	export default{
		components:{
			uinav,
			uicontent,
			mainfooter
		}
	}
</script>

<style>
	#ui-main{
		padding-top:2.514285rem;
	}
</style>