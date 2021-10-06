import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;

Vue.use(axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
