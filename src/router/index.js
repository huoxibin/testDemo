import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import list from '@/page/list'
import index from '@/page/index'
import detail from '@/page/detail'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path:'list',
          component:list
        },
        {
          path:'index',
          component:index
        },
        {
          path:'detail',
          component:detail
        }
      ]
    },
   /* {
      path:'list',
      component:list,
      name:'list'
    },
    {
      path:'index',
      component:index,
      name:'index'
    },
    {
      path:'detail',
      component:detail,
      name:'detail'
    },*/
  ]
})
