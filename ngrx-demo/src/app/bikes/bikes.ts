import { Component } from '@angular/core';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './bikes.html',
  styleUrl: './bikes.scss',
})
export class Bikes {
  bikes = [
    'Trek Émonda',
    'Specialized Turbo',
    'Giant Propel',
    'Canyon Aeroad',
  ];

  trackByBike(index: number, item: string) {
    return item;
  }
}
