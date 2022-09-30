import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

Vue.use(VueAxios, axios)
Vue.use(VueCookies, { expire: '1d' })

const baseUrl = 'https://apiexperienciaingenieria.uinn.cl/api/'
Vue.axios.defaults.baseURL = baseUrl


Vue.config.productionTip = false

// * Configuraciones de íconos
import './config/_fontAwesome'
// * Carga de stores y mixins
import './config/_stores'

import vuetify from './plugins/vuetify'

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
