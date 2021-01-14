import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Order,
  selectAllOrders,
  selectOrderPaginator,
  updateOrderPagination,
} from '@bb-smartish/core-state';
import { Paginator } from 'libs/api-interfaces/src/lib';

type OrderColumnKeys = keyof Order;

@Component({
  selector: 'bb-smartish-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders$ = this.store.select(selectAllOrders);
  displayedColumns: OrderColumnKeys[] = [
    'id',
    'date',
    'customer',
    'total',
    'payment',
    'fulfillment',
    'items',
  ];

  paginator$ = this.store.select(selectOrderPaginator);

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateOrderPagination({ pagination }));
  }
}
