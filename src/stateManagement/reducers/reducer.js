import { initialState } from "../initialState";

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_DATA': 
            return {
                ...state,
                products: [...action.payload.products]
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload.selectedProduct]
            }
        default: return state
    }
}

export default reducer