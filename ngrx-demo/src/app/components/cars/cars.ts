import { Component } from '@angular/core';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './cars.html',
  styleUrl: './cars.scss',
})
export class Cars {
  cars = [
    'Tesla Model S',
    'BMW i4',
    'Ford Mustang Mach-E',
    'Mercedes EQS',
  ];

  trackByCar(index: number, item: string) {
    return item;
  }
}
