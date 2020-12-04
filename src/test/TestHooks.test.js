import React from 'react';
import ReactDOM from 'react-dom';
import TestHook from '../TestHook';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

it('text in state is changed when button clicked', () => {
    const { getByText } = render(<TestHook />);

    expect(getByText(/initial/i).textContent).toBe('initial state');

    fireEvent.click(getByText('State change button'));

    expect(getByText(/initial/i).textContent).toBe('initial state changed');
});

it('button click changes props', () => {
    const { getByText } = render(
        <App>
            <TestHook />
        </App>,
    );

    expect(getByText(/moe/i).textContent).toBe('Moe');

    fireEvent.click(getByText('change Name'));

    expect(getByText(/steve/i).textContent).toBe('steve');
});
