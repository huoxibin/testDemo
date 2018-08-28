import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import list from '@/page/list'
import index from '@/page/index'
import detail from '@/page/detail'
/*import components1 from '@/page/components1'
import components2 from '@/page/components2'*/
import components0 from '@/page/components0'

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
        },
        {
          path:'components0',
          component:components0
        }
        /*{
          path:'components1',
          component:components1
        },
        {
          path:'components2',
          component:components2
        }*/
      ]
    }
  ]
})
