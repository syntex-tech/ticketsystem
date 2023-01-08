import Vue from 'vue';
import VueRouter, { createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

export default router;