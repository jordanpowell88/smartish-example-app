import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState, ORDERS_FEATURE } from './orders.reducer';

const ordersFeatureSelector = createFeatureSelector<OrdersState>(
  ORDERS_FEATURE
);

export const selectAllOrders = createSelector(
  ordersFeatureSelector,
  (state) => state[ORDERS_FEATURE]
);

export const selectPaginator = createSelector(
  ordersFeatureSelector,
  (state) => state.pagination
);
