import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShippingInvoice, shippingSelectors } from '@bb-smartish/core-state';

type ShippingInvoiceColumnKeys = keyof ShippingInvoice;

@Component({
  selector: 'bb-smartish-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  shippings$ = this.store.select(shippingSelectors.selectAllShippings);
  paginator$ = this.store.select(shippingSelectors.selectPaginator);
  displayedColumns: ShippingInvoiceColumnKeys[] = [
    'id',
    'to',
    'date',
    'status',
    'amount',
  ];

  constructor(private readonly store: Store) {}
}
