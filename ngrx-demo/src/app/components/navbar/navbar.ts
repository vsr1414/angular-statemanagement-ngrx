import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, CartState } from '../../store/state.model';
import { selectCartCount } from '../../store/app.selectors';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private store = inject(Store<AppState>);

  // public observable for the template
  cartItemCount$: Observable<number> = this.store.select(selectCartCount);
}
