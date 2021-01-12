import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CustomersState, CUSTOMERS_FEATURE } from './customers.reducer';

const customersFeatureSelector = createFeatureSelector<CustomersState>(
  CUSTOMERS_FEATURE
);

export const selectIsLoading = createSelector(
  customersFeatureSelector,
  (state) => state.isLoading
);

export const selectError = createSelector(
  customersFeatureSelector,
  (state) => state.error
);

export const selectAllCustomers = createSelector(
  customersFeatureSelector,
  (state) => state[CUSTOMERS_FEATURE]
);

export const selectPaginator = createSelector(
  customersFeatureSelector,
  (state) => state.pagination
);

export const selectCustomer = createSelector(
  customersFeatureSelector,
  (state) =>
    state[CUSTOMERS_FEATURE].find(
      (customer) => customer.id === state.selectedId
    )
);
