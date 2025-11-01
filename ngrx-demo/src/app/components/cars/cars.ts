import { Component } from '@angular/core';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './cars.html',
  styleUrls: ['./cars.scss'],
})
export class Cars {
  cars: Product[] = [
    {
      name: 'Tesla Model S',
      id: 0,
      price: 79990
    },
    {
      name: 'BMW i4',
      id: 1,
      price: 55900
    },
    {
      name: 'Ford Mustang Mach-E',
      id: 2,
      price: 42995
    },
    {
      name: 'Mercedes EQS',
      id: 3,
      price: 102310
    },
  ];

  trackByCar(index: number, item: Product) {
    return item.id;
  }
}
