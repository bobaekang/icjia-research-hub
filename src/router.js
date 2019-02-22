import Vue from 'vue'
import Router from 'vue-router'

import { makeRoute, makeRouteChild } from './utils';

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        makeRoute('home'),
        makeRoute('about'),
        makeRoute('apps', [
            makeRouteChild('appSearch', 'AppSearch', ''),
        ]),
        makeRoute('articles', [
            makeRouteChild('articleSearch', 'ArticleSearch', ''),
            makeRouteChild('articleView', 'ArticleView', ':name')
        ]),
        makeRoute('authors', [
            makeRouteChild('authorList', 'AuthorList', ''),
            makeRouteChild('authorView', 'AuthorView', ':name')
        ]),
        makeRoute('datasets', [
            makeRouteChild('datasetSearch', 'DatasetSearch', ''),
            makeRouteChild('datasetView', 'DatasetDetail', ':name')
        ]),
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
})



