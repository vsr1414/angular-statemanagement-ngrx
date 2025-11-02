import { Component, inject } from '@angular/core';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { DataService } from '../shared/data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './bikes.html',
  styleUrl: './bikes.scss',
})
export class Bikes {

  private dataService = inject(DataService);
  bikes: Product[] = [];
  loading = true;

  ngOnInit() {
    this.loading = true;
    this.dataService
      .getBikesData()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Product[]) => (this.bikes = data),
        error: () => (this.bikes = []),
      });
  }
  trackByBike(index: number, item: Product) {
    return item.id;
  }
}
