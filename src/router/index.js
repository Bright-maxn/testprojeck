import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'yxgxt',
      component:()=>import('@/views/yxgxt')
    }
    // {
    //   path: '/',
    //   name: 'jdgxt',
    //   component:()=>import('@/views/jdgxt')
    // }
    // {
    //   path: '/',
    //   name: 'cs',
    //   component:()=>import('@/views/cs')
    // }
    // {
    //   path: '/',
    //   name: 'gxt',
    //   component:()=>import('@/views/gxt')
    // }
    // {
    //   path: '/',
    //   name: 'ech',
    //   component:()=>import('@/views/ech')
    //   // component: HelloWorld
    // }
  ]
})
