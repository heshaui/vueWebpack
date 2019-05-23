<template>
	<div id="app">
		<Header/>
		<section class="mainContainer">
			<router-view/>
		</section>
		<Footer/>
	</div>
</template>
<script>
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';
	export default{
		name:'app',
		components:{
			Header,
			Footer
		}
	}
</script>
<style lang="scss">
	body,html{
		width:100%;
		height:100%;
	}
	#app{
    	width:100%;
    	height:100%;
    	display:flex;
    	flex-flow:column nowrap;
    	.mainContainer{
	        width:100%;
	        flex:1 0 auto;
	    }
    }
    
</style>