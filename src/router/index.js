import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import introduction from '@/components/Introduction'
import selectionExplanation from '@/components/SelectionExplanation'
import selection from '@/components/Selection'
import recommendation from '@/components/Recommendation'
import about from '@/components/About'
import imageUploader from '@/components/ImageUploader'
import imageExplanation from '@/components/ImageExplanation'

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
        path: '/introduction',
        component: introduction,
      },
      {
        path: '/selection-explanation',
        component: selectionExplanation,
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
      },
      {
        path: '/image-explanation',
        component: imageExplanation
      },
      {
        path: '/image-uploader',
        component: imageUploader
      }
    ]
  })
