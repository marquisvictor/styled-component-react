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
            setAlert({
                show: true,
                msg: 'you need to add a text',
                type: 'danger',
            });
        } else if (name && isEditing) {
            setAlert({
                show: true,
                msg: 'value changed successfully',
                type: 'success',
            });
        } else {
            setAlert({
                show: true,
                msg: 'added successfully',
                type: 'success',
            });
            const newItems = {
                id: new Date().getTime().toString(),
                title: name,
            };
            // console.log(List);
            setList([...list, newItems]);
            setName('');
        }
    };

    const clearList = () => {
        setAlert({
            show: true,
            msg: 'you don clear am, you don happy ba???',
            type: 'success',
        });
        setList('');
    };

    const handleInput = e => {
        setName(e.target.value);
    };

    const removeItem = id => {
        setAlert({
            show: true,
            msg: 'osheyy you don comot am',
            type: 'success',
        });

        setList(list.filter(listitem => listitem.id !== id));
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert({ show: true });
        }, 2000);

        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <section className='section-center'>
            <form action='' onSubmit={handleSubmit} className='grocery-form'>
                {alert.show && <Alert {...alert} />}
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
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className='grocery-container'>
                    <List items={list} removeItem={removeItem} />
                    <button className='clear-btn' onClick={clearList}>
                        clear items
                    </button>
                </div>
            )}
        </section>
    );
}

export default App;
