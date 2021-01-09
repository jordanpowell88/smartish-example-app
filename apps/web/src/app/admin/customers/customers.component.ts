import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer, customersSelectors } from '@bb-smartish/core-state';

type CustomerColumnKeys = keyof Customer;

@Component({
  selector: 'bb-smartish-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  customers$ = this.store.select(customersSelectors.selectAllCustomers);
  displayedColumns: CustomerColumnKeys[] = [
    'email',
    'totalOrders',
    'totalSpent',
  ];
  paginator$ = this.store.select(customersSelectors.selectPaginator);

  constructor(private readonly store: Store) {}
}
