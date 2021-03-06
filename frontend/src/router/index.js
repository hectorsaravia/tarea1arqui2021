import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue';
import Registro from '../views/Registro.vue';
import Dashboard from '../views/Dashboard.vue';
import NewComida from '../views/NewComida.vue';
import ComidaDetalle from '../views/ComidaDetalle.vue';
import Modificar from '../views/Modificar.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Login},
  {path: '/registro', component: Registro},
  {path: '/dashboard', component: Dashboard},
  {path: '/newcomida', component: NewComida},
  {path: '/comida/:nombre', component:ComidaDetalle, name:"ComidaDetalle"},
  {path: '/modificar/:id', component:Modificar, name:"Modificar"}
]

const router = new VueRouter({
  routes
})

export default router
