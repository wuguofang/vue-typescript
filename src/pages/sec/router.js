// 路由
import vueRouter from 'vue-router';
import sec from './views/sec.vue';

const routes = [{
	name: 'sec',
	path: '/',
	component: sec
}];

const router = new vueRouter({
	mode: 'hash',
	routes
});

export default router;