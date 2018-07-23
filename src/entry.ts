// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(vueRouter)
Vue.use(iView)

/* eslint-disable no-new */
export default function (router, template) {
  return new Vue({
    el: '#app',
    router,
    template: template || '<app/>',
    components: { App }
  })
}
