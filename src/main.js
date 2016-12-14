import 'babel-polyfill';
import Vue from 'vue';
import VueResource from 'vue-resource';
import {sync} from 'vuex-router-sync';
import store from './vuex/store';
import App from './App';
import AwesomeSwiper from 'vue-awesome-swiper';
import router from './router';
import './assets/css/style.css';

sync(store, router);
Vue.use(VueResource);
Vue.use(AwesomeSwiper);
// 创建 Vue 实例
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})