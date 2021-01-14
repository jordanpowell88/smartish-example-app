import { Component } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import {
  Customer,
  Order,
  Product,
  selectAllProducts,
  selectAllCustomers,
  selectAllOrders,
} from '@bb-smartish/core-state';

const selectDashboardPreviews = createSelector(
  selectAllOrders,
  selectAllCustomers,
  selectAllProducts,
  (orders: Order[], customers: Customer[], products: Product[]) => [
    {
      title: 'Orders',
      subtitle: 'Today',
      total: orders.length,
      url: '/orders',
    },
    {
      title: 'Customers',
      subtitle: 'Today',
      total: customers.length,
      url: '/customers',
    },
    {
      title: 'Products',
      subtitle: 'Today',
      total: products.length,
      url: '/catalog',
    },
  ]
);

@Component({
  selector: 'bb-smartish-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  previews$ = this.store.select(selectDashboardPreviews);

  constructor(private readonly store: Store) {}
}
