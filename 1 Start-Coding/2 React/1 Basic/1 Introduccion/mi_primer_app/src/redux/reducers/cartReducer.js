const INIT_STATE = {
    cart: [],
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "PUSH NEW PRODUCT":
            return {
                ...state,
            };
        default:
            return state;
    }
};