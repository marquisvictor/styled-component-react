import React from 'react';

const List = ({ people }) => {
    return (
        <>
            {people.map(person => {
                const { name, id, age, image } = person;

                return (
                    <article>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;
