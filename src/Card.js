import React from 'react';

const UserCard = ({ name, phone, company, id }) => {
    return (
        <>
            <div className='card-center'>
                <h3>User {id} </h3>
                <ul>
                    <li>
                        <p>Name : {name}</p>
                    </li>
                    <li>
                        <p>Address : Street, Suite, City </p>
                    </li>
                    {[company].map((info, index) => {
                        return (
                            <ul key={index}>
                                <li>
                                    <p> Company : {info.name}</p>
                                </li>
                                <li>
                                    <p> About : {info.catchPhrase}</p>
                                </li>
                            </ul>
                        );
                    })}
                    <li>
                        <p>Phone Number: {phone} </p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default UserCard;
