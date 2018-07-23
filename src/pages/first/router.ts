// 路由
import vueRouter from 'vue-router'
import { AsyncComponent } from 'vue'
const first: AsyncComponent = (): any => import('./views/first.vue')

interface Iroutes {
  name: string
  path: string
  component: any
}

const routes: Iroutes[] = [{
  name: 'index',
  path: '/',
  component: first
}]

const router: vueRouter = new vueRouter({
  mode: 'hash',
  routes
})

export default router
