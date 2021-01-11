import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Customer,
  customerActions,
  customersSelectors,
} from 'libs/core-state/src/lib';

@Component({
  selector: 'bb-smartish-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  customer$ = this.store.select(customersSelectors.selectCustomer);

  constructor(private readonly store: Store) {}

  save(customer: Customer): void {
    this.store.dispatch(customerActions.updateCustomer({ customer }));
  }
}
