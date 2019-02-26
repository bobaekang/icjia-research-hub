import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/apps',
      component: () => import('@/views/Apps.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/AppSearch.vue')
        },
        {
          path: ':slug',
          component: () => import('@/views/AppView.vue')
        }
      ]
    },
    {
      path: '/articles',
      component: () => import('@/views/Articles.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/ArticleSearch.vue')
        },
        {
          path: ':slug',
          component: () => import('@/views/ArticleView.vue')
        }
      ]
    },
    {
      path: '/authors',
      component: () => import('@/views/Authors.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/AuthorList.vue')
        },
        {
          path: ':slug',
          component: () => import('@/views/AuthorView.vue')
        }
      ]
    },
    {
      path: '/datasets',
      component: () => import('@/views/Datasets.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/DatasetSearch.vue')
        },
        {
          path: ':slug',
          component: () => import('@/views/DatasetView.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/404.vue')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
