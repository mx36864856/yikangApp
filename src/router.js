import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import  Mine from './views/Mine.vue'
import  Classify from './views/Classify.vue'
import  Community from './views/Community.vue'
import  Catalogue from './views/Catalogue.vue'
import  Space from './views/Space.vue'
import  Set from './views/Set.vue'
import  Material from './views/Material.vue'
import  Daily from './views/Daily.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/',
          name:'home',
          component: Home
      },
      {
          path:'/home',
          redirect:'/'
      },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: Catalogue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
          path:'/mine',
          name:'mine',
          component: Mine
      },{
          path:'/classify',
          name:'classify',
          component: Classify
      },{
          path:'/community',
          name:'community',
          component: Community
      },{
          path:'/space',
          name:'space',
          component: Space
      },{
          path: '/set',
          name: 'set',
          component: Set
      },{
          path: '/material',
          name: 'material',
          component: Material
      },{
          path: '/daily',
          name: 'daily',
          component: Daily
      }
  ]
})
