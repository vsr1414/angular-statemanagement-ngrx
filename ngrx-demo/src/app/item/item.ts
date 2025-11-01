import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

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

  increment() {
    this.count++;
    this.cartService.increment();
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.cartService.decrement();
    }
  }
}
