<template>
	<header class="header">
		<h1>Hello Vue</h1>
	</header>
</template>
<script>
	export default{
		name:'Header'
	}
</script>
<style scoped lang="scss">
	header{
		width:100%;
		height:50px;
		background:#333;
		flex:0 0 auto;
		h1{
			width:100%;
			height:100%;
			text-align:center;
			font-size:20px;
			line-height:50px;
			color:#fff;
		}
	}
</style>