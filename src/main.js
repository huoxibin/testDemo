//自带的
import Vue from 'vue'
import App from './App'
import router from './router'

//封装axions的
import {axios,qs,get,post} from './api/axios';
Vue.prototype.$axios=axios;
Vue.prototype.$get=get;
Vue.prototype.$post=post;
Vue.prototype.$qs=qs;

//element-ui的
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//把scss设置成全局变量
import './scss/common.scss'
//自带的
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})