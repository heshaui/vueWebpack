<template>
	<div class="myMain">{{msg}}:{{$route.query.id}}</div>
</template>
<script type="text/javascript">
	export default{
		name:'My',
		data(){
			return {
				msg:'我是我的'
			}
		}
	}
</script>
<style lang="scss" scoped>
	.myMain{
		height:70px;
		font-size:26px;
		line-height:70px;
		text-align: center;
	}
</style>