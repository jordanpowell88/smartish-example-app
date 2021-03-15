import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState, ORDERS_FEATURE } from './orders.reducer';

const ordersFeatureSelector = createFeatureSelector<OrdersState>(
  ORDERS_FEATURE
);

export const ordersIsLoading = createSelector(
  ordersFeatureSelector,
  (state) => state.isLoading
);

export const ordersError = createSelector(
  ordersFeatureSelector,
  (state) => state.error
);

export const allOrders = createSelector(
  ordersFeatureSelector,
  (state) => state[ORDERS_FEATURE]
);

export const orderPaginator = createSelector(
  ordersFeatureSelector,
  (state) => state.pagination
);

export const order = createSelector(ordersFeatureSelector, (state) =>
  state[ORDERS_FEATURE].find((order) => order.id === state.selectedId)
);
