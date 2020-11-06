import React from 'react';
import { BrowserRouter, Switch, Router, NavLink } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
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
                            <Route
                                exact
                                path='/dashboard'
                                component={Dashboard}
                            />
                            <Route exact path='/login' component={Login} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
