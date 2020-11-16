import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context';
import routes from './config/routes';
import './App.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    {routes.map(route => (
                        <Route
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
