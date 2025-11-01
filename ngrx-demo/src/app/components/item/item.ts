import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../store/cart.actions';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item {
  @Input() name!: string;
  count = 0;

  private cartService = inject(CartService);
  private store = inject(Store);

  addToCart() {
    this.store.dispatch(addToCart());
  }

  removeFromCart() {
    this.store.dispatch(removeFromCart());
  }
}
