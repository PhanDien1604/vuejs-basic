import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import UsersIndex from '@/pages/users/Index';
import ProductIndex from '@/pages/products/Index';
import OrderIndex from '@/pages/orders/Index';
import statisticalIndex from '@/pages/statistical/Index';
import WarehouseIndex from '@/pages/warehouse/Index';
import CategoryIndex from '@/pages/category/Index';
import Contact from '@/pages/Contact';
import Account from '@/pages/Account';
import Setting from '@/pages/Setting';

const routes = [
    { 
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/users',
        component: UsersIndex
    },
    {
        path: '/products',
        component: ProductIndex
    },
    {
        path: '/orders',
        component: OrderIndex
    },
    {
        path: '/warehouse',
        component: WarehouseIndex
    },
    {
        path: '/statistical',
        component: statisticalIndex
    },
    {
        path: '/category',
        component: CategoryIndex
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/account',
        component: Account
    },
    {
        path: '/setting',
        component: Setting
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router