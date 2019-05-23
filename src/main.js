//引入
import Vue from 'vue';
import router from './router';
import App from './App.vue';
//引入公共css
require('../static/css/common.scss');

//实例
new Vue({
	router,
	render:h => h(App)
}).$mount('#app');