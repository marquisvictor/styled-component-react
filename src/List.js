import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, removeItem, editIcon }) => {
    return (
        <div className='grocery-list'>
            {items.map((item, index) => {
                const { title, id } = item;
                return (
                    <article className='grocery-item' key={id}>
                        <p className='title'>{title}</p>
                        <div className='btn-container'>
                            <button
                                type='button'
                                onClick={() => editIcon(id)}
                                className='edit-btn'
                            >
                                <FaEdit />
                            </button>
                            <button
                                type='bu(tton'
                                onClick={() => removeItem(id)}
                                className='delete-btn'
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default List;
