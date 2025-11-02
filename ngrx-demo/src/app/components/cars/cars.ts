import { Component, inject } from '@angular/core';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { DataService } from '../shared/data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './cars.html',
  styleUrls: ['./cars.scss'],
})
export class Cars {
  
  private dataService = inject(DataService);
  cars: Product[] = [];
  loading = true;

  ngOnInit() {
    this.loading = true;
    this.dataService
      .getCarsData()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Product[]) => (this.cars = data),
        error: () => (this.cars = []),
      });
  }

  trackByCar(index: number, item: Product) {
    return item.id;
  }
}
