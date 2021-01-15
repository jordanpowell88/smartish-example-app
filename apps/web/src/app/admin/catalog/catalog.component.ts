import { Component } from '@angular/core';
import {
  Product,
  selectAllProducts,
  selectProductPaginator,
  updateProductPagination,
} from '@bb-smartish/core-state';
import { Store } from '@ngrx/store';
import { Paginator } from 'libs/api-interfaces/src/lib';

type CatalogColumnKeys = keyof Product;

@Component({
  selector: 'bb-smartish-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  catalog$ = this.store.select(selectAllProducts);
  paginator$ = this.store.select(selectProductPaginator);
  displayedColumns: CatalogColumnKeys[] = [
    'name',
    'status',
    'inventory',
    'category',
  ];

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateProductPagination({ pagination }));
  }
}
