import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '../components/Hello'
import index from '../views/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/visea',
      name: 'index',
      component: index
    }
  ]
})
