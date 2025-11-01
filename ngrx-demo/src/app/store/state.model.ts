import { Product } from "../components/models/product.model";

export interface AppState {
  cart: CartState;
}

export interface CartState {
  items: Product[];
  total: number;
}