import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import AirCoolers from '@/views/AirCoolers'
// import AirDetail from '@/views/AirDetail'
const routes = [
    {
        path: '/',
        name: 'airCoolers',
        component: AirCoolers
    },
    {
        path: '/airDetail',
        name: 'airDetail',
        component: () => import('@/views/AirDetail')
    },
    {
        path: '/disclosure',
        name: 'disclosure',
        component: () => import('@/views/Disclosure')
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: () => import('@/views/Privacy')
    },
    {
        path: '/terms',
        name: 'terms',
        component: () => import('@/views/Terms')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact')
    }
];


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;