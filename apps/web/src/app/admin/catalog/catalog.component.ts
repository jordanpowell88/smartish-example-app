import { Component } from '@angular/core';
import {
  Product,
  allProducts,
  productPaginator,
  updateProductPagination,
} from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';

type CatalogColumnKeys = keyof Product;

@Component({
  selector: 'bb-smartish-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  select = { allProducts, productPaginator };
  updatePagination = smartDispatch(updateProductPagination);
  displayedColumns: CatalogColumnKeys[] = [
    'name',
    'status',
    'inventory',
    'category',
  ];
}
