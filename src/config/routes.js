// Config routes

import React from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/pageNotFound',
        component: PageNotFound,
    },
];

export default routes;
