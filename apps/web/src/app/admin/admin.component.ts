import { Component } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import {
  ordersSelectors,
  customersSelectors,
  productSelectors,
  Customer,
  Order,
  Product,
} from '@bb-smartish/core-state';

const selectDashboardPreviews = createSelector(
  ordersSelectors.selectAllOrders,
  customersSelectors.selectAllCustomers,
  productSelectors.selectAllProducts,
  (orders: Order[], customers: Customer[], products: Product[]) => [
    {
      title: 'Orders',
      subtitle: 'Today',
      total: orders.length,
    },
    {
      title: 'Customers',
      subtitle: 'Today',
      total: customers.length,
    },
    {
      title: 'Products',
      subtitle: 'Today',
      total: products.length,
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
