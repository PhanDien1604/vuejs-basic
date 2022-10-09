import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';

import UsersIndex from '@/pages/users/Index';
import UsersCreate from '@/pages/users/Create';
import UsersDetail from '@/pages/users/Detail';

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
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/users',
        name: 'users',
        component: UsersIndex
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: UsersCreate
    },
    {
        path: '/users/detail',
        name: 'users.detail',
        component: UsersDetail
    },
    {
        path: '/products',
        name: 'products',
        component: ProductIndex
    },
    {
        path: '/order',
        name: 'order',
        component: OrderIndex
    },
    {
        path: '/warehouse',
        name: 'warehouse',
        component: WarehouseIndex
    },
    {
        path: '/statistical',
        name: 'statistical',
        component: statisticalIndex
    },
    {
        path: '/category',
        name: 'category',
        component: CategoryIndex
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },
    {
        path: '/setting',
        name: 'setting',
        component: Setting
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router