import { Component } from '@angular/core';
import {
  Customer,
  selectAllCustomers,
  selectCustomerPaginator,
  updateCustomerPagination,
} from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';

type CustomerColumnKeys = keyof Customer;

@Component({
  selector: 'bb-smartish-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  selectors = { selectAllCustomers, selectCustomerPaginator };
  displayedColumns: CustomerColumnKeys[] = [
    'email',
    'totalOrders',
    'totalSpent',
  ];
  updatePagination = smartDispatch(updateCustomerPagination);
}
