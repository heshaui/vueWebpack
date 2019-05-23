import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import My from '../pages/My.vue';

Vue.use(Router);

const router = new Router({
	routes:[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/my',
			component:My
		}
	]
});

export default router;