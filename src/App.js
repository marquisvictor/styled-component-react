import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const handleSubmit = e => {
        e.preventDefault();
        if (!name) {
            // display alert
        } else if (name && isEditing) {
            // deal with if editing it true
        } else {
            const newItems = {
                id: new Date().getTime().toString(),
                title: name,
            };
            // console.log(List);
            setList([...list, newItems]);
            setName('');
        }
    };

    const handleInput = e => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <section className='section-center'>
            <form action='' onSubmit={handleSubmit} className='grocery-form'>
                {alert.show && <Alert />}
                <h3>grocery bud</h3>
                <div className='form-control'>
                    <input
                        className='grocery'
                        placeholder='e.g. call victor'
                        type='text'
                        value={name}
                        onChange={handleInput}
                    />
                    <button type='submit' className='submit-btn'>
                        {isEditing ? 'edit' : 'submii'}
                    </button>
                </div>
            </form>
            <div className='grocery-container'>
                <List items={list} />
                <button className='clear-btn'>clear items</button>
            </div>
        </section>
    );
}

export default App;
