import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';

import Demo from '@/pages/Demo';

const routes = [
    { 
        path: '/',
        component: Home
    },
    { 
        path: '/demo',
        component: Demo
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router