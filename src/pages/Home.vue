<template>
	<div class="homeMain">{{msg}}:{{$route.query.id}}</div>
</template>
<script type="text/javascript">
	export default{
		name:'Home',
		data(){
			return{
				msg:'我是首页'
			}
		}
	}
</script>
<style lang="scss" scoped>
	.homeMain{
		height:70px;
		font-size:26px;
		line-height:70px;
		text-align: center;
	}
</style>