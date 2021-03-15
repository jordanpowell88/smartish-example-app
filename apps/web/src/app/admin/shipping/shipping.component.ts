import { Component } from '@angular/core';
import {
  allShippings,
  shippingPaginator,
  ShippingInvoice,
  updateShippingPagination,
} from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';

type ShippingInvoiceColumnKeys = keyof ShippingInvoice;

@Component({
  selector: 'bb-smartish-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  select = { allShippings, shippingPaginator };
  displayedColumns: ShippingInvoiceColumnKeys[] = [
    'id',
    'to',
    'date',
    'status',
    'amount',
  ];
  updatePagination = smartDispatch(updateShippingPagination);
}
