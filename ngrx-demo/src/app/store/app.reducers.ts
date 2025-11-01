import { createReducer, on } from '@ngrx/store';
import { CartState } from './state.model';
import { addToCart, removeFromCart } from './app.actions';
import { Product } from '../components/models/product.model';

// reducer now manages the CartState directly (items + total)
const initialCartState: CartState = {
    items: [] as Product[],
    total: 0,
};

export const cartReducer = createReducer(
    initialCartState,
    on(addToCart, (state, { product }) => ({
        ...state,
        items: [...state.items, product],
    })),
    on(removeFromCart, (state, { id }) => ({
        ...state,
        items: state.items.filter((item) => item.id !== id),
    })),
);

