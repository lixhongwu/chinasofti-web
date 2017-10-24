import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/main'
import pClass from'@/components/class/class'
import gClass from'@/components/class/gclass'
import user from'@/components/user-info/ui-main'
import details from'@/components/ware-info/wi-main'

Vue.use(Router)

export default new Router({
  routes: [
     { path: "/", 
       redirect: "/Main" 
     },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    { 
       path: "/pClass/gClass/:num", 
       component: gClass,
//     children:[
//              {
//                  path: '/pClass/gClass/:num/details',
//                  name: 'details',
//                  component: details
//              }
//            ]
    },
    {
        path: '/pClass/gClass/details/:goodsCode',
        name: 'details',
        component: details
    },
    {
      path: '/pClass',
      name: 'pClass',
      component: pClass,
//    children: [  
//          { 
//            path: "/pClass/gClass/:num", 
//            component: gClass,
//            children:[
//              {
//                  path: '/pClass/gClass/:num/details',
//                  name: 'details',
//                  component: details
//              }
//            ]
//          }  
//      ]  
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
