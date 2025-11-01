import { createAction, props } from "@ngrx/store";

export const addToCart =  createAction('[Cart] Add to cart');
export const removeFromCart = createAction('[Cart] Remove from cart');