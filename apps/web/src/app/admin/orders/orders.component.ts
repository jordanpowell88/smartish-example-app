import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Order,
  selectAllOrders,
  selectOrderPaginator,
  updateOrderPagination,
} from '@bb-smartish/core-state';
import { Paginator } from 'libs/api-interfaces/src/lib';
import { smartDispatch } from '@briebug/ngrx-smartish';

type OrderColumnKeys = keyof Order;

@Component({
  selector: 'bb-smartish-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  displayedColumns: OrderColumnKeys[] = [
    'id',
    'date',
    'customer',
    'total',
    'payment',
    'fulfillment',
    'items',
  ];
  selectors = { selectAllOrders, selectOrderPaginator };
  updatePagination = smartDispatch(updateOrderPagination);
}
