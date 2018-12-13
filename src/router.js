import Vue from 'vue'
import Router from 'vue-router'

import { makeRoute } from './utils';

Vue.use(Router)

export default new Router({
    routes: [
        'home',
        'dataset',
        'research',
        'apps',
        'resources',
        'about'
    ].map(el => makeRoute(el)),
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
})



