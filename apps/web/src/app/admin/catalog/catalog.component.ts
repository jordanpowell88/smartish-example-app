import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllProducts,
  selectPaginator,
} from 'libs/core-state/src/lib/catalog-store/product/product.selectors';

@Component({
  selector: 'bb-smartish-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  catalog$ = this.store.select(selectAllProducts);
  paginator$ = this.store.select(selectPaginator);
  displayedColumns = ['product', 'status', 'inventory', 'category'];

  constructor(private readonly store: Store) {}
}
