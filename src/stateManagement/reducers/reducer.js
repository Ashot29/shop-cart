import { initialState } from "../initialState";

function reducer(state = initialState, action) {
    switch(action.type) { 
        case 'GET_DATA': 
            return {
                ...state,
                products: [...action.payload.products]
            }
        default: return state
    }
}

export default reducer