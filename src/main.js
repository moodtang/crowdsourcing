// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router, {constantRouterMap} from './router'
import 'babel-polyfill' //浏览器兼容
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from'vue-lazyload' //懒加载
import axios from 'axios' //网络请求
import qs from 'qs'
import store from './store/store'
import './icons'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(qs)
Vue.prototype.axios=axios

Vue.use(VueLazyload,{
  preload:5.3,//预加载的宽高
  loading:"img的加载中的显示的图片的路径",
  error:"img加载失败时现实的图片的路径",
  attempt:3,//尝试加载的次数
  listenEvents:['scroll','wheel','mousewheel','resize','animationend','transitionend','touchmove'], //vue监听的事件
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,axios,router,store,
  components: { App },
  template: '<App/>'
})
//路由判断
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})
// axios.interceptors.request.use( (config) => {
//   // if (sessionStorage.userToken) {
//   //   config.headers.Authorization = "Bearer "+sessionStorage.userToken;
//   // }
//   let token = sessionStorage.getItem('token');
//   if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//     config.headers.Authorization = "Bearer " + token;
//   }
//
//   if (config.method === "post"){
//     config.data = qs.stringify(config.data);
//     // config.headers = {'Content-Type' : 'application/x-www-form-urlencoded'};
//
//   }
//   return config;
// },  (error) => {
//   return Promise.reject(error);
// });

