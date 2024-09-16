import { createRouter, createWebHistory } from 'vue-router';
import Registro from '@/components/Registro.vue';
import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
