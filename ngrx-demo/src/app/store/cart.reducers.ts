import { createReducer, on } from "@ngrx/store";
import { State } from "./state.model";
import { addToCart, removeFromCart } from "./cart.actions";


const initialState: State = {
    cartCount : 0
};

export const appReducers = createReducer(
    initialState,
    on(addToCart, (state) => ({ ...state, cartCount: state.cartCount + 1 })),
    on(removeFromCart, (state) => ({ ...state, cartCount: state.cartCount - 1 }))
);

