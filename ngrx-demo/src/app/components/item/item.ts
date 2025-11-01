import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../store/cart.actions';
import { Product } from '../models/product.model';

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

  private cartService = inject(CartService);
  private store = inject(Store);

  addToCart(item: Product) {
    this.store.dispatch(addToCart());
  }

  removeFromCart(id: number) {
    this.store.dispatch(removeFromCart());
  }
}
