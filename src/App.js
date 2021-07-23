import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        try {
            let colors = new Values(color).all(10);
            console.log(colors);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    return (
        <>
            <section className='container'>
                <h3>Color Generator</h3>
                <form action='' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        placeholder='#f15025'
                    />

                    <button type='submit' className='btn'>
                        submit
                    </button>
                </form>
            </section>
        </>
    );
}

export default App;
