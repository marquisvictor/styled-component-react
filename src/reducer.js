import CartItem from './CartItem';

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
        let tempCart = state.cart
            .map(item => {
                const { amount, id } = item;

                if (id === action.payload) {
                    return { ...item, amount: item.amount - 1 };
                }
                return item;
            })
            .filter(item => item.amount !== 0);

        return {
            ...state,
            cart: tempCart,
        };
    }

    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;
                cartTotal.amount += amount;
                cartTotal.total += itemTotal;
                return cartTotal;
            },
            { total: 0, amount: 0 },
        );
        total = parseFloat(total.toFixed(2));
        return { ...state, total, amount };
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true };
    }

    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload, loading: false };
    }

    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart
            .map(cartItem => {
                if (cartItem.id === action.payload.id) {
                    if (action.payload.type === 'inc') {
                        return { ...cartItem, amount: cartItem.amount + 1 };
                    }
                    if (action.payload.type === 'dec') {
                        return { ...cartItem, amount: cartItem.amount - 1 };
                    }
                }
                return cartItem;
            })
            .filter(cartItem => cartItem.amount !== 0);

        return { ...state, cart: tempCart };
    }

    return state;
};
