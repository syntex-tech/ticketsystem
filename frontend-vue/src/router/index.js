import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import About from '' 

const routes = [
    {
        path: '/',
        name: 'App',
        componen: App
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router