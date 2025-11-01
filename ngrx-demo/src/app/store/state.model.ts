import { Product } from "../components/models/product.model";

export interface State {
  cart: CartState;
}

export interface CartState {
  items: Product[];
  total: number;
}