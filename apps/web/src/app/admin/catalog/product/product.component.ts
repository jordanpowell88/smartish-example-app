import { Component } from '@angular/core';
import { Product, productSelectors } from '@bb-smartish/core-state';
import { Store } from '@ngrx/store';
import { productActions } from '@bb-smartish/core-state';

@Component({
  selector: 'bb-smartish-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$ = this.store.select(productSelectors.selectProduct);
  sizes$ = this.store.select(productSelectors.selectSizes);

  constructor(private readonly store: Store) {}

  save(product: Product): void {
    this.store.dispatch(productActions.updateProduct({ product }));
  }
}
