import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _cartCount: WritableSignal<number> = signal(0);

  // expose the signal so components can read it in templates
  readonly cartCount = this._cartCount;

  increment(by = 1) {
    this._cartCount.update((v) => v + by);
  }

  decrement(by = 1) {
    this._cartCount.update((v) => Math.max(0, v - by));
  }

  reset() {
    this._cartCount.set(0);
  }
}
