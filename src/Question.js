import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShow = () => {
        setShowInfo(!showInfo);
    };

    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={handleShow} className='btn'>
                    {showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
                </button>
            </header>
            <p> {showInfo ? info : null} </p>
        </article>
    );
};

export default Question;
