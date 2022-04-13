import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: () => import(/* webpackChunkName: "AllTrashs" */ '../pages/HomePage.vue') },
    { path: '/dechets', component: () => import(/* webpackChunkName: "AllTrashs" */ '../pages/TrashList.vue') },
    { path: '/dechets/:name', component: () => import(/* webpackChunkName: "AllTrashs" */ '../pages/TrashCard.vue') },
    { path: '/historique', component: () => import(/* webpackChunkName: "AllTrashs" */ '../pages/TrashHistoric.vue') }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router