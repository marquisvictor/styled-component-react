import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './Card';
const UserList = () => {
    const [data, setData] = useState([]);

    let url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        axios.get(url).then(res => setData(res.data));
    }, [url]);

    return (
        <article>
            <nav className='nav'>
                <h2>User Info List from Json Place holder</h2>
            </nav>
            <section className='container'>
                {data.map(item => {
                    // console.log(item);
                    return <UserCard key={item.id} {...item} />;
                })}
            </section>
        </article>
    );
};

export default UserList;
