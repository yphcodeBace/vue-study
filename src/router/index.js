import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
// import menus from '@/config/menu-config'

Vue.use(Router)

let routes = [
  {path: '', redirect: '/Index'},
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },

]

// menus.forEach((item) => {
//   item.sub.forEach((sub) => {
//     routes.push({
//       path: `/${sub.componentName}`,
//       name: sub.componentName,
//       component: () => import(`@/components/${sub.componentName}`)
//     })
//   })
// })

export default new Router({ routes })
