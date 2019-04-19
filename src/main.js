import Vue from 'vue'
import ResearchHubLib from 'icjia-research-hub-lib'
import 'icjia-research-hub-lib/dist/icjia-research-hub-lib.css'
import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ResearchHubLib)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(`#app`)
