import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CustomersState, CUSTOMERS_FEATURE } from './customers.reducer';

const customersFeatureSelector = createFeatureSelector<CustomersState>(
  CUSTOMERS_FEATURE
);

export const customersIsLoading = createSelector(
  customersFeatureSelector,
  (state) => state.isLoading
);

export const customersError = createSelector(
  customersFeatureSelector,
  (state) => state.error
);

export const allCustomers = createSelector(
  customersFeatureSelector,
  (state) => state[CUSTOMERS_FEATURE]
);

export const customerPaginator = createSelector(
  customersFeatureSelector,
  (state) => state.pagination
);

export const customer = createSelector(customersFeatureSelector, (state) =>
  state[CUSTOMERS_FEATURE].find((customer) => customer.id === state.selectedId)
);
