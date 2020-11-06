import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import axios from 'axios';

import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import { getToken, setUserSession } from './utils/Common';

function App() {
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            return;
        }
        axios
            .get(`http:localhost:4000/verifyToken?token=${token}`)
            .then(response => {
                setUserSession(response.data.token, response.data.user);
                setAuthLoading(false);
            });
    }, []);

    if (authLoading && getToken()) {
        return <div className='content'> Checking Authentication </div>;
    }

    return (
        <div className='App'>
            <BrowserRouter>
                <div>
                    <div className='header'>
                        <NavLink exact activeClassName='active' to='/'>
                            {' '}
                            Home{' '}
                        </NavLink>
                        <NavLink activeClassName='active' to='/login'>
                            {' '}
                            Login{' '}
                        </NavLink>
                        <NavLink activeClassName='active' to='/dashboard'>
                            {' '}
                            Dashboard{' '}
                        </NavLink>
                    </div>
                    <div className='content'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <PrivateRoute
                                exact
                                path='/dashboard'
                                component={Dashboard}
                            />
                            <PublicRoute
                                exact
                                path='/login'
                                component={Login}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
