import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'nprogress/nprogress.css'
import SocialSharing from 'vue-social-sharing'

import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(SocialSharing)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
