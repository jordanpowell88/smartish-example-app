import { Component } from '@angular/core';
import {
  Order,
  allOrders,
  orderPaginator,
  updateOrderPagination,
} from '@bb-smartish/core-state';
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
  select = { allOrders, orderPaginator };
  updatePagination = smartDispatch(updateOrderPagination);
}
