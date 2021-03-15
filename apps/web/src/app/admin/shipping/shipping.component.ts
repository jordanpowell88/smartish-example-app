import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllShippings,
  selectShippingPaginator,
  ShippingInvoice,
  updateShippingPagination,
} from '@bb-smartish/core-state';
import { Paginator } from 'libs/api-interfaces/src/lib';
import { smartDispatch } from '@briebug/ngrx-smartish';

type ShippingInvoiceColumnKeys = keyof ShippingInvoice;

@Component({
  selector: 'bb-smartish-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  selectors = { selectAllShippings, selectShippingPaginator };
  displayedColumns: ShippingInvoiceColumnKeys[] = [
    'id',
    'to',
    'date',
    'status',
    'amount',
  ];
  updatePagination = smartDispatch(updateShippingPagination);
}
