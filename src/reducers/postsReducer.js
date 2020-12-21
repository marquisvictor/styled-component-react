import * as actions from '../actions/postsActions';

export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
};

export default function postsReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case actions.GET_POSTS:
            return {
                ...state,
                loading: true,
            };
        case actions.GET_POSTS_SUCCESS:
            return {
                // ...state,
                posts: action.payload,
                loading: false,
                // hasErrors: false,
            };

        case actions.GET_POST_FAILURE:
            return {
                ...state,
                loading: false,
                hasErrors: true,
            };

        default:
            return state;
    }
}
