import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState, ORDERS_FEATURE } from './orders.reducer';

const ordersFeatureSelector = createFeatureSelector<OrdersState>(
  ORDERS_FEATURE
);

export const selectIsLoading = createSelector(
  ordersFeatureSelector,
  (state) => state.isLoading
);

export const selectError = createSelector(
  ordersFeatureSelector,
  (state) => state.error
);

export const selectAllOrders = createSelector(
  ordersFeatureSelector,
  (state) => state[ORDERS_FEATURE]
);

export const selectPaginator = createSelector(
  ordersFeatureSelector,
  (state) => state.pagination
);

export const selectOrder = createSelector(ordersFeatureSelector, (state) =>
  state[ORDERS_FEATURE].find((order) => order.id === state.selectedId)
);
