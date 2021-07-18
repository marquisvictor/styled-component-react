import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
    return (
        <main className=''>
            <div className='container'>
                <h3>Questions and Answes About Login</h3>
                <section className='info'>
                    {questions.map(question => {
                        return (
                            <SingleQuestion key={question.id} {...question} />
                        );
                    })}
                </section>
            </div>
            {/* <SingleQuestion /> */}
        </main>
    );
}

export default App;
