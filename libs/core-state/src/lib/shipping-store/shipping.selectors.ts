import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShippingState, SHIPPING_FEATURE } from './shipping.reducer';

const shippingFeatureSelector = createFeatureSelector<ShippingState>(
  SHIPPING_FEATURE
);

export const selectIsLoading = createSelector(
  shippingFeatureSelector,
  (state) => state.isLoading
);

export const selectError = createSelector(
  shippingFeatureSelector,
  (state) => state.error
);

export const selectAllShippings = createSelector(
  shippingFeatureSelector,
  (state) => state[SHIPPING_FEATURE]
);

export const selectPaginator = createSelector(
  shippingFeatureSelector,
  (state) => state.pagination
);

export const selectShipment = createSelector(shippingFeatureSelector, (state) =>
  state[SHIPPING_FEATURE].find((shipment) => shipment.id === state.selectedId)
);