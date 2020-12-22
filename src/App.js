import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';

import './index.css';

const App = props => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={DashboardPage} />
                <Route path='/posts' component={PostsPage} />
                <Redirect to='/' />
            </Switch>
        </Router>
    );
};

export default App;
