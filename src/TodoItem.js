import React from 'react';
import { useParams } from 'react-router-dom';

import './App.css';

export const TodoItem = () => {
    const { id } = useParams();
    return <div className='single-todo-item'></div>;
};
