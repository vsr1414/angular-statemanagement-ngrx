import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import type { State as CartState } from '../../store/state.model';
import { Observable } from 'rxjs';

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
  cartCount$: Observable<number> = this.store.select(state => state.cart.cartCount);
}
