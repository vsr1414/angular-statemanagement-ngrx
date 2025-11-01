import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../store/app.actions';
import { Product } from '../models/product.model';
import { CartState } from '../../store/state.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item {
  @Input() item!: Product;
  count = 0;

  private store = inject(Store<{cart: CartState}>);
  cart = [];
  addToCart(item: Product) {
    this.store.dispatch(addToCart({ product: item }));
    this.count = this.count + 1;
  }

  removeFromCart(id: number) {
    this.store.dispatch(removeFromCart({id : id}));
    this.count = this.count > 0 ? this.count - 1 : 0 ;
  }
}
