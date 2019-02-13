import Vue from 'vue'
import Router from 'vue-router'

import { makeRoute, makeRouteChild } from './utils';

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        makeRoute('home'),
        makeRoute('about'),
        makeRoute('app', [
            makeRouteChild('appSearch', 'AppSearch', ''),
        ]),
        makeRoute('article', [
            makeRouteChild('articleSearch', 'ArticleSearch', ''),
            makeRouteChild('articleView', 'ArticleView', ':name')
        ]),
        makeRoute('author', [
            makeRouteChild('authorList', 'AuthorList', ''),
            makeRouteChild('authorView', 'AuthorView', ':name')
        ]),
        makeRoute('dataset', [
            makeRouteChild('datasetSearch', 'DatasetSearch', ''),
            makeRouteChild('datasetView', 'DatasetDetail', ':name')
        ]),
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
})



