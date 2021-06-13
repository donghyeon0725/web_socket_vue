import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import eventBus from '/src/event-bus'
import realTimeClient from '/src/real-time-client'

Vue.config.productionTip = false

Vue.prototype.$bus = eventBus
Vue.prototype.$rt = realTimeClient

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
