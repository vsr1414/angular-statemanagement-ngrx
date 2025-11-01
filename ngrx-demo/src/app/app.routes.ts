import { Routes } from '@angular/router';
import { Cars } from './cars/cars';
import { Bikes } from './bikes/bikes';

export const routes: Routes = [
  { path: 'cars', component: Cars },
  { path: 'bikes', component: Bikes },
  { path: '', redirectTo: '/cars', pathMatch: 'full' }
];
