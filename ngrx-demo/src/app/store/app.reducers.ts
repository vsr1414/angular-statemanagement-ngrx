import { createReducer, on } from '@ngrx/store';
import { CartState } from './state.model';
import { addToCart, removeFromCart } from './app.actions';
import { Product } from '../components/models/product.model';

// reducer manages the CartState directly (items + total)
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
        on(removeFromCart, (state, { id }) => {
            // remove only the first occurrence of the item with matching id
            const idx = state.items.findIndex((item) => item.id === id);
            if (idx === -1) return state;
            const newItems = [...state.items.slice(0, idx), ...state.items.slice(idx + 1)];
            console.log('[cartReducer] removeFromCart id=', id, 'oldCount=', state.items.length, 'newCount=', newItems.length);
            return {
                ...state,
                items: newItems,
            };
        }),
);

