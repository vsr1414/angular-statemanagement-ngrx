import { Component, inject } from '@angular/core';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { DataService } from '../shared/data.service';
import { finalize } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './bikes.html',
  styleUrl: './bikes.scss',
})
export class Bikes {

  private sharedService = inject(SharedService);
  bikes: Product[] = [];
  loading = false;

  ngOnInit() {
    // this.dataService
    //   .getBikesData()
    //   .pipe(finalize(() => (this.loading = false)))
    //   .subscribe({
    //     next: (data: Product[]) => (this.bikes = data),
    //     error: () => (this.bikes = []),
    //   });
    this.sharedService.bikesData.subscribe({
      next: (data: Product[]) => (this.bikes = data),
      error: () => (this.bikes = []),
    });
  }
  trackByBike(index: number, item: Product) {
    return item.id;
  }
}
