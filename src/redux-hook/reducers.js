import * as ACTIONS from './actions';

export const initialState = {
    stateprop1: false,
};

export const Reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SUCCESS:
            return {
                ...state,
                stateProp1: true,
            };
        case ACTIONS.FAILURE:
            return {
                ...state,
                stateprop1: false,
            };
        default:
            return state;
    }
};
