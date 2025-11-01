import { Component } from '@angular/core';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './bikes.html',
  styleUrl: './bikes.scss',
})
export class Bikes {
  bikes: Product[] = [
    { id: 1, name: 'Trek Émonda', price: 2499 },
    { id: 2, name: 'Specialized Turbo', price: 4999 },
    { id: 3, name: 'Giant Propel', price: 2999 },
    { id: 4, name: 'Canyon Aeroad', price: 3999 },
  ];

  trackByBike(index: number, item: Product) {
    return item.id;
  }
}
