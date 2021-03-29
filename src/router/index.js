import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import explanation from '@/components/Explanation'
import selection from '@/components/Selection'
import recommendation from '@/components/Recommendation'
import about from '@/components/About'

Vue.use(Router)

export default new Router({
    // URLに#を入らないようにする
    mode:'history',

    routes: [
        {
          path:'/',
          component: index
        },
      {
        path: '/explanation',
        component: explanation,
      },
      {
        path: '/selection',
        component: selection,
      },
      {
        path: '/recommendation',
        component: recommendation
      },
      {
        path:'/about',
        component: about
      }
    ]
  })
