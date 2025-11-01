import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../../store/state.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private store = inject(Store<{ cart: CartState }>);

  // observable the template will consume with the async pipe
  // read number of items from state.cart.items
  cartItemCount$: Observable<number> = this.store.select((state) => state.cart.items.length);
}
