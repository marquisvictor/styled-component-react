import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

const App = () => {
    return (
        <div>
            <h1>Tabs Demo</h1>
            <Tabs>
                <div label='victor'>see you later Victor!</div>
                <div label='Joy'>see you later Joy!</div>
                <div label='Osagie'>see you later Osagie!</div>
                <div label='Oseghale'>see you later Oseghale!</div>
            </Tabs>
        </div>
    );
};

export default App;
