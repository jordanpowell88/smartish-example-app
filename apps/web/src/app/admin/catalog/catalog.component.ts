import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product, productSelectors } from '@bb-smartish/core-state';

type CatalogColumnKeys = keyof Product;

@Component({
  selector: 'bb-smartish-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  catalog$ = this.store.select(productSelectors.selectAllProducts);
  paginator$ = this.store.select(productSelectors.selectPaginator);
  displayedColumns: CatalogColumnKeys[] = [
    'name',
    'status',
    'inventory',
    'category',
  ];

  constructor(private readonly store: Store) {}
}
