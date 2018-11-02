import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [

  {
    path: '/',
    component: () => import('@/components/view/Index'),
  },
  {
    path: '/hello',
    component: HelloWorld,
  //  redirect: 'dashboard',
     // path: 'dashboard',
      component: () => import('@/components/HelloWorld'),
      name: 'HelloWorld',
      meta: {title: '首页', icon: 'index', noCache: true}
  },
]
export const asyncRouterMap = [

]
export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  mode: 'history',
  routes: constantRouterMap
})
