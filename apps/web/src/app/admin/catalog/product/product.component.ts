import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { productSelectors } from 'libs/core-state/src/lib';

@Component({
  selector: 'bb-smartish-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$ = this.store.select(productSelectors.selectProduct);
  sizes$ = this.store.select(productSelectors.selectSizes);

  constructor(private readonly store: Store) {}
}
