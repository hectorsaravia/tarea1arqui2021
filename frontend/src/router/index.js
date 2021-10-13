import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue';
import Registro from '../views/Registro.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Login},
  {path: '/registro', component: Registro}
]

const router = new VueRouter({
  routes
})

export default router
