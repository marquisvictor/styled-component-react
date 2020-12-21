import React from 'react';
import ReactDOM from 'react-dom';
import TestHookReducer from '../TestHookReducer';
import { render, fireEvent, cleanup } from '@testing-library/react';
import * as Reducer from '../redux-hook/reducers';
import * as ACTIONS from '../redux-hook/actions';

afterEach(cleanup);

describe('test the reducer and actions', () => {
    it('should return the initial state', () => {
        expect(Reducer.initialState).toEqual({ stateprop1: false });
    });

    // it('should change stateprop1 from false to true', () => {
    //     expect(
    //         Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS),
    //     ).toEqual({ stateprops1: true });
    // });
    // it('Reducer changes stateprop1 from false to true', () => {
    //     const { container, getByText } = render(<TestHookReducer />);
    // });
});
