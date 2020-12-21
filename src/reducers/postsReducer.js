export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
};

export default function postsReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
}
