import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/duty',
    alias: '/',
    component: () => import(/* webpackChunkName: "helper/duty" */ '@/views/helper/duty/Portal.vue')
  }
]

export default routes
