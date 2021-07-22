import React, { useState } from 'react';
import data from './data';
function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSumbit = e => {
        e.preventDefault();
        let initial = data.slice(0, count);

        setText(initial);
    };

    return (
        <section className='section-center'>
            <h3>Tired of boring lorem ipsum ?</h3>

            <form action='' onSubmit={handleSumbit} className='lorem-form'>
                <label htmlFor='amount'>paragraphs</label>
                <input
                    type='number'
                    name='amount'
                    id='amount'
                    onChange={e => setCount(e.target.value)}
                    disabled={parseInt(count) >= data.length - 1}
                    value={count > 0 ? count : ''}
                />

                <button type='submit' className='btn'>
                    generate
                </button>
            </form>

            <article className='lorem-text'>
                {text.map((item, index) => {
                    return <p key={index}>{item}</p>;
                })}
            </article>
        </section>
    );
}

export default App;
