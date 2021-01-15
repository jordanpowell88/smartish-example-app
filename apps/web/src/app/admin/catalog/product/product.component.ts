import { Component } from '@angular/core';
import {
  deleteProduct,
  Product,
  selectProduct,
  selectSizes,
  updateProduct,
} from '@bb-smartish/core-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-smartish-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$ = this.store.select(selectProduct);
  sizes$ = this.store.select(selectSizes);

  constructor(private readonly store: Store) {}

  save(product: Product): void {
    this.store.dispatch(updateProduct({ product }));
  }

  delete(product: Product): void {
    this.store.dispatch(deleteProduct({ product }));
  }
}
