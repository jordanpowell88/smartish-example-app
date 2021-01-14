import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllShippings,
  selectShippingPaginator,
  ShippingInvoice,
  updateShippingPagination,
} from '@bb-smartish/core-state';
import { Paginator } from 'libs/api-interfaces/src/lib';

type ShippingInvoiceColumnKeys = keyof ShippingInvoice;

@Component({
  selector: 'bb-smartish-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  shippings$ = this.store.select(selectAllShippings);
  paginator$ = this.store.select(selectShippingPaginator);
  displayedColumns: ShippingInvoiceColumnKeys[] = [
    'id',
    'to',
    'date',
    'status',
    'amount',
  ];

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateShippingPagination({ pagination }));
  }
}
