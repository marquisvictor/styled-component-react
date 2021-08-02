export const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] };
    }

    if (action.type === 'REMOVE_ITEM') {
        const cartr = state.cart.filter(ids => ids.id !== action.payload);

        return { ...state, cart: cartr };
    }

    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map(item => {
            const { amount, id } = item;

            if (id === action.payload) {
                return { ...item, amount: item.amount + 1 };
            }
            return item;
        });

        return {
            ...state,
            cart: tempCart,
        };
    }

    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map(item => {
            const { amount, id } = item;

            if (id === action.payload && item.amount > 0) {
                return { ...item, amount: item.amount - 1 };
            }
            return item;
        });

        return {
            ...state,
            cart: tempCart,
        };
    }

    return state;
};
