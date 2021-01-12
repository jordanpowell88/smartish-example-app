import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BillingsState, BILLINGS_FEATURE } from './billings.reducer';

const billingFeatureSelector = createFeatureSelector<BillingsState>(
  BILLINGS_FEATURE
);

export const selectIsLoading = createSelector(
  billingFeatureSelector,
  (state) => state.isLoading
);

export const selectError = createSelector(
  billingFeatureSelector,
  (state) => state.error
);

export const selectAllBillings = createSelector(
  billingFeatureSelector,
  (state) => state.billingInvoice
);

export const selectPaginator = createSelector(
  billingFeatureSelector,
  (state) => state.pagination
);

export const selectBill = createSelector(billingFeatureSelector, (state) =>
  state.billingInvoice.find((bill) => bill.id === state.selectedId)
);
