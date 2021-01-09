import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CustomersState, CUSTOMERS_FEATURE } from './customers.reducer';

const customersFeatureSelector = createFeatureSelector<CustomersState>(
  CUSTOMERS_FEATURE
);

export const selectAllCustomers = createSelector(
  customersFeatureSelector,
  (state) => state[CUSTOMERS_FEATURE]
);

export const selectPaginator = createSelector(
  customersFeatureSelector,
  (state) => state.pagination
);
