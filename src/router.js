import Vue from 'vue'
import Router from 'vue-router'

import { makeRoute, makeRouteChild } from './utils';

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        makeRoute('home'),
        makeRoute('dataset', [
            makeRouteChild('', 'DatasetSearch'),
            makeRouteChild(':name', 'DatasetDetail')
        ]),
        makeRoute('research'),
        makeRoute('apps'),
        makeRoute('resources'),
        makeRoute('about'),
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
})



