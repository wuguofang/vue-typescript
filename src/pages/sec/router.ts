// 路由
import { AsyncComponent } from 'vue'
import vueRouter from 'vue-router'
const sec: AsyncComponent = () => import('./views/sec.vue')

interface Iroutes {
  name: string
  path: string
  component: any
}

const routes: Iroutes[] = [{
  name: 'sec',
  path: '/',
  component: sec
}]

const router: vueRouter = new vueRouter({
  mode: 'hash',
  routes
})

export default router
