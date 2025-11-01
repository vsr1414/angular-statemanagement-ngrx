import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private cartService = inject(CartService);

  // expose a getter for the template
  get cartItemCount() {
    return this.cartService.cartCount();
  }

  // optional: clicking the cart could do something later
  openCart() {
    // placeholder
    console.log('Open cart');
  }
}
