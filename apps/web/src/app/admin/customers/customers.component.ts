import { Component } from '@angular/core';
import {
  Customer,
  allCustomers,
  customerPaginator,
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
  select = { allCustomers, customerPaginator };
  displayedColumns: CustomerColumnKeys[] = [
    'email',
    'totalOrders',
    'totalSpent',
  ];
  updatePagination = smartDispatch(updateCustomerPagination);
}
