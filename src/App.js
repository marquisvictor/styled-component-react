import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { TodoList } from './TodoList';

const App = () => {
    return (
        <div className='App-body'>
            <header className='App-header'>
                <h2>Getting started with React testing library</h2>
            </header>
            <BrowserRouter>
                <Route exact path='/' component={TodoList} />
            </BrowserRouter>
        </div>
    );
};

export default App;
