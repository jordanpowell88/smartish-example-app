import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllProducts } from 'libs/core-state/src/lib/catalog-store/product/product.selectors';

@Component({
  selector: 'bb-smartish-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  catalog$ = this.store.select(selectAllProducts);
  displayedColumns = ['product', 'status', 'inventory', 'category'];

  constructor(private readonly store: Store) {}
}
