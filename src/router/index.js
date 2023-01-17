import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import  Dictionary from '@/views/Dictionary.vue'
import About from '@/views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Dictionary',
        name: 'Dictionary',
        component: Dictionary
    },
    {
        path: '/About',
        name: 'About',
        component: About
    }
]

const router = createRouter({ 
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes })
export default router