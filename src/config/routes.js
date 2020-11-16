// Config routes
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';

const routes = [
    {
        path: '/login',
        component: Login,
        isPrivate: false,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        isPrivate: true,
    },
    {
        path: '/*',
        component: PageNotFound,
        isPrivate: true,
    },
];

export default routes;
