import { createAction, props } from "@ngrx/store";
import { Product } from "../components/models/product.model";

export const addToCart =  createAction('[Cart] Add to cart', props<{ product: Product}>());
export const removeFromCart = createAction('[Cart] Remove from cart', props<{ id: number}>());