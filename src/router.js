import Vue from 'vue'
import Router from 'vue-router'

import * as utils from './utils'

Vue.use(Router)

export default new Router({
    routes: [
        utils.makeRoute('home'),
        utils.makeRoute('dataset'),
        utils.makeRoute('research'),
        utils.makeRoute('apps'),
        utils.makeRoute(
            'resources',
            './views/Resources',
            [
                utils.makeRouteChild('user', './views/Resources'),
                utils.makeRouteChild('developer', './views/Resources')
            ]
        ),
        utils.makeRoute('about')
    ]
})



