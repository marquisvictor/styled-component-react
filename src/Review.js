import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { math } from 'polished';

const Review = () => {
    const [index, setIndex] = useState(0);

    const { name, job, image, text } = people[index];

    const check = number => {
        if (number >= people.length) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const handleClick = value => {
        if (value === '+') {
            setIndex(index => {
                let newIndex = index + 1;
                return check(newIndex);
            });
        } else if (value === '-') {
            setIndex(index => {
                let newIndex = index + 1;
                return check(newIndex);
            });
        }
    };

    const randomhandler = () => {
        let randPerson = Math.ceil(Math.random() * (people.length - 1));
        if (randPerson === index) {
            randPerson = index + 1;
        }
        setIndex(check(randPerson));
    };

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button onClick={() => handleClick('-')} className='prev-btn'>
                    <FaChevronLeft />
                </button>
                <button onClick={() => handleClick('+')} className='next-btn'>
                    <FaChevronRight />
                </button>
            </div>
            <button onClick={randomhandler} className='random-btn'>
                surpise me{' '}
            </button>
        </article>
    );
};

export default Review;
