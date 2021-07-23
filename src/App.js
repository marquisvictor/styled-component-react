import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
    const [color, setColor] = useState();
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#f15025').all(20));

    function handleSubmit(e) {
        e.preventDefault();

        try {
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
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
                        className={error ? 'error' : null}
                    />

                    <button type='submit' className='btn'>
                        submit
                    </button>
                </form>
            </section>
            <section className='colors'>
                {list.map((key, index) => {
                    return <SingleColor key={index} {...key} index={index} />;
                })}
            </section>
        </>
    );
}

export default App;
