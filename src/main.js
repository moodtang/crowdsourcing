// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from'vue-lazyload'

Vue.config.productionTip = false
Vue.use(ElementUI)

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
  router,
  components: { App },
  template: '<App/>'
})
