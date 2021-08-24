import { initialState } from "../initialState";

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_DATA': 
            return {
                ...state,
                products: [...action.payload.products]
            }
        case 'ADD_TO_CART':
            // if (action.payload.selectedProduct in state.cartProducts) return;
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload.selectedProduct]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartProducts: [...action.payload.cartProducts]
            }
        case 'SET_PRICE':
            return {
                ...state,
                totalPrice: action.payload.price
            }
        case 'SET_QUANTITY':
            return {
                ...state,
                totalQuantity: action.payload.quantity
            }
        default: return state
    }
}

export default reducer