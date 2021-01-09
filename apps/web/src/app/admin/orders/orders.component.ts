import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order, ordersSelectors } from 'libs/core-state/src/lib';

type OrderColumnKeys = keyof Order;

@Component({
  selector: 'bb-smartish-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders$ = this.store.select(ordersSelectors.selectAllOrders);
  displayedColumns: OrderColumnKeys[] = [
    'id',
    'date',
    'customer',
    'total',
    'payment',
    'fulfillment',
    'items',
  ];

  paginator$ = this.store.select(ordersSelectors.selectPaginator);

  constructor(private readonly store: Store) {}
}
