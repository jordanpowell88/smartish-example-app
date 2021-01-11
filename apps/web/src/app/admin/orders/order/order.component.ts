import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order, orderActions, ordersSelectors } from 'libs/core-state/src/lib';

@Component({
  selector: 'bb-smartish-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  order$ = this.store.select(ordersSelectors.selectOrder);

  constructor(private readonly store: Store) {}

  save(order: Order): void {
    this.store.dispatch(orderActions.updateOrder({ order }));
  }
}
