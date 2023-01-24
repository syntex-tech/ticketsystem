import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Ticketshop from './components/Ticketshop.vue'
import Info from './components/Info.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/ticketshop', name: 'Ticketshop', component: Ticketshop},
        {path: '/info', name: 'Info', component: Info},
        {path: '/login', name: 'Login', component: Login},
        {path: '/register', name: 'Register', component: Register}
    ]

})

createApp(App).use(router).mount('#app')
