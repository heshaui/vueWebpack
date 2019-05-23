<template>
	<footer>
		<ul>
			<li>
				<router-link :to="{path:'home',query:{id:home_id}}">首页</router-link>
			</li>
			<li>
				<router-link :to="{path:'my',query:{id:my_id}}">我的</router-link>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default{
		name:'Footer',
		data(){
			return {
				home_id:'100',
				my_id:'200'
			}
		}
	}
</script>
<style scoped lang="scss">
	footer{
		width:100%;
		height:60px;
		background:#ccc;
		flex:0 0 auto;
		ul{
			width:100%;
			height:100%;
			display:flex;
			flex-flow:row nowrap;
			justify-content: space-around;
			align-items:center;
			li{
				font-size:20px;
				color:#333;
				cursor:pointer;
			}
		}
	}
</style>