// 路由
import vueRouter from 'vue-router';
import first from './views/first.vue';

const routes = [{
	name: 'index',
	path: '/',
	component: first
}];

const router = new vueRouter({
	mode: 'hash',
	routes
});

export default router;