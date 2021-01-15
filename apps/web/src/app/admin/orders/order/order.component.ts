import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  deleteOrder,
  Order,
  selectOrder,
  updateOrder,
} from '@bb-smartish/core-state';

@Component({
  selector: 'bb-smartish-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  order$ = this.store.select(selectOrder);

  constructor(private readonly store: Store) {}

  save(order: Order): void {
    this.store.dispatch(updateOrder({ order }));
  }

  delete(order: Order): void {
    this.store.dispatch(deleteOrder({ order }));
  }
}
