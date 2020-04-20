import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import BasicLayout from '@/pages/BasicLayout'
import BasicContainer from '@/pages/BasicContainer'
import FormRadio from '@/pages/FormRadio'
import FormCheckbox from '@/pages/FormCheckbox'

// import menus from '@/config/menu-config'

Vue.use(Router)

let routes = [
  {path: '', redirect: '/Index'},
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path: '/BasicLayout',
    name: 'BasicLayout',
    component: BasicLayout
  },
  {
    // path: '/BasicContainer/:id',
    path: '/BasicContainer',
    name: 'BasicContainer',
    component: BasicContainer
  },
  {
    path: '/FormRadio',
    name: 'FormRadio',
    component: FormRadio
  },
  {
    path: '/FormCheckbox',
    name: 'FormCheckbox',
    component: FormCheckbox
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
