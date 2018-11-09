import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/data',
            component: () => import('./views/Data.vue')
        },
        {
            path: '/research',
            component: () => import('./views/Research.vue')
        },
        {
            path: '/apps',
            component: () => import('./views/Apps.vue')
        },
        {
            path: '/resources',
            component: () => import('./views/Resources/Index.vue'),
            children: [
                {
                    path: 'user',
                    component: () => import('./views/Resources/User.vue')
                },
                {
                    path: 'developer',
                    component: () => import('./views/Resources/Developer.vue')
                }
            ]
        },
        {
            path: '/about',
            component: () => import('./views/About.vue')
        }
    ]
})
