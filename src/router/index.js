import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/components/view/Login'),
    name: 'LoginPage',
    meta: {title: 'LoginPage', icon: 'Login', noCache: true}
  },
  {
    path: '/home',
    component: () => import('@/components/layout/Layout'),
    meta:{requireAuth:true},
    children:[
      {
        path: '/index',
        component: () => import('@/components/view/Index'),
        meta:{requireAuth:true}
      },
      {
        path: '/hello',
        //  redirect: 'dashboard',
        // path: 'dashboard',
        component: () => import('@/components/HelloWorld'),
        name: 'HelloWorld',
        meta: {title: 'hello', icon: 'index', noCache: true,requireAuth:true}
      },
      {
        path: '/taskList',
        component: () => import('@/components/view/TaskList'),
        name: 'TaskList',
        meta: {title: '任务列表', icon: 'taskList', noCache: true,requireAuth:true}
      },
      {
        path: '/managerImg',
        component: () => import('@/components/view/ManagerImg'),
        name: 'ManagerImg',
        meta: {title: '图片管理', icon: 'managerImg', noCache: true,requireAuth:true}
      },{
        path: '/managerData',
        component: () => import('@/components/view/ManagerData'),
        name: 'ManagerData',
        meta: {title: '图片管理', icon: 'managerData', noCache: true,requireAuth:true}
      },
    ]
  },

  {
    path: '/register',
    component: () => import('@/components/view/Register'),
    name: 'Register',
    meta: {title: '注册', icon: 'register', noCache: true}
  },
  {
    path: '/login',
    component: () => import('@/components/view/Login'),
    name: 'Login',
    meta: {title: 'Login', icon: 'Login', noCache: true}
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
