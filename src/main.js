import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $$ from 'jquery'
Vue.use(MintUI)
Vue.use(VueAgile)
Vue.config.productionTip = false
new Vue({
  router,
  store,
    $$,
  render: h => h(App),
}).$mount('#app')
