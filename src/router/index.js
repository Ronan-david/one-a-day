import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: () => {
          return { path: '/accueil'}
        },
      },
    { path: '/accueil', component: () => import(/* webpackChunkName: "AllTrashs" */ '../pages/HomePage.vue') },
    { path: '/dechets', component: () => import(/* webpackChunkName: "AllTrashs" */ '../pages/TrashList.vue') },
    { path: '/dechets/:name', component: () => import(/* webpackChunkName: "AllTrashs" */ '../pages/TrashCard.vue') },
    { path: '/historique', component: () => import(/* webpackChunkName: "AllTrashs" */ '../pages/TrashHistoric.vue') }
]
const router = createRouter({
    history: createWebHashHistory('/one-a-day/'),
    routes
})
export default router