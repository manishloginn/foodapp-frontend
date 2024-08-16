import { Action } from "./action";

const initialState = {
    data: [],
    AdminData: null,
    cart:[],
}

export const reducer = (state = initialState, action) => { 
    switch (action.type){
        case Action.ALLDATA:
            return {...state, data: action.payload}
        case Action.AdminData : 
        return { ...state, AdminData : action.payload}
        case Action.CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]  

            }

        default:
            return state;
    }
}