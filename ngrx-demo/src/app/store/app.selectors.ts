import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './state.model';

// feature selector - key must match the key used in provideStore({ cart: cartReducer })
export const selectCartFeature = createFeatureSelector<CartState>('cart');

// safe selector that returns number of items (0 if cart is undefined)
export const selectCartCount = createSelector(
	selectCartFeature,
	(cart) => (cart?.items?.length ?? 0),
);