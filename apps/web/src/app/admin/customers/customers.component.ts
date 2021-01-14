import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Customer,
  selectAllCustomers,
  selectCustomerPaginator,
  updateCustomerPagination,
} from '@bb-smartish/core-state';
import { Paginator } from 'libs/api-interfaces/src/lib';

type CustomerColumnKeys = keyof Customer;

@Component({
  selector: 'bb-smartish-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  customers$ = this.store.select(selectAllCustomers);
  displayedColumns: CustomerColumnKeys[] = [
    'email',
    'totalOrders',
    'totalSpent',
  ];
  paginator$ = this.store.select(selectCustomerPaginator);

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateCustomerPagination({ pagination }));
  }
}
