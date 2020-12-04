import React, { useState } from 'react';

const TestHook = props => {
    const [state, setState] = useState('initial state');

    const changeState = () => {
        setState('initial state changed');
    };

    const changeNameToSteve = () => {
        props.changeName();
    };

    return (
        <div>
            <button onClick={changeState}>State change button</button>
            <p>{state}</p>
            <button onClick={changeNameToSteve}>change Name</button>
            <p>{props.name}</p>
        </div>
    );
};

export default TestHook;
