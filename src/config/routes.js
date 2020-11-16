// Config routes
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
        path: '/*',
        component: PageNotFound,
    },
];

export default routes;
