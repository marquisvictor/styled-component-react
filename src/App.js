import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './context';
import routes from './config/routes';
import './App.css';
import AppRoute from './components/AppRoutes';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    {routes.map(route => (
                        <AppRoute
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact
                        />
                    ))}
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
