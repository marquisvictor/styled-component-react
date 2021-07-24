import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');

    const hex = rgbToHex(...rgb);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 700);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <article
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hex);
            }}
            style={{ backgroundColor: `rgb(${bcg})` }}
            className={`color ${index > 10 && 'color-light'}`}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hex}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
