import React, { useReducer } from 'react';
import * as ACTIONS from './redux-hook/actions';
import * as Reducer from './redux-hook/reducers';

const TestHookReducer = () => {
    const [reducerState, dispatch] = useReducer(
        Reducer.Reducer1,
        Reducer.initialState,
    );

    console.log(Reducer.initialState);

    const dispatchActionSuccess = () => {
        dispatch(ACTIONS.SUCCESS);
    };

    return (
        <div>
            <div>
                {reducerState.stateprop1 ? (
                    <p>stateprop1 is true</p>
                ) : (
                    <p>stateprop1 is false</p>
                )}
            </div>
            <button onClick={dispatchActionSuccess}>Dispatch Success</button>
        </div>
    );
};

export default TestHookReducer;
