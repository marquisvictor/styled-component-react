import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TestHook from './TestHook';
import Basic from './Basic';
import './App.css';

const App = props => {
    const [state, setState] = useState('some text');
    const [name, setName] = useState('Moe');

    const changeName = () => {
        setName('steve');
    };

    return (
        <div className='App'>
            <Basic />
            <h1> Basic Hook useState</h1>
            <TestHook name={name} changeName={changeName} />
        </div>
    );
};

export default App;
