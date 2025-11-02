import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { DataService } from './components/shared/data.service';
import { finalize } from 'rxjs';
import { Product } from './components/models/product.model';
import { SharedService } from './components/shared/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.scss'
})
export class App {
  private dataService = inject(DataService);
  private sharedService = inject(SharedService);
  ngOnInit() {
    this.dataService
      .getBikesData()
      .subscribe({
        next: (data: Product[]) => (
          this.sharedService.bikesData.next(data)
        ),
        error: () => (console.log('Error fetching bikes data'))
      });
      this.dataService
      .getCarsData()
      .subscribe({
        next: (data: Product[]) => (
          this.sharedService.carsData.next(data)
        ),
        error: () => (console.log('Error fetching cars data')),
      });
  }
}
