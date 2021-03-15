import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShippingState, SHIPPING_FEATURE } from './shipping.reducer';

const shippingFeatureSelector = createFeatureSelector<ShippingState>(
  SHIPPING_FEATURE
);

export const shippingIsLoading = createSelector(
  shippingFeatureSelector,
  (state) => state.isLoading
);

export const shippingError = createSelector(
  shippingFeatureSelector,
  (state) => state.error
);

export const allShippings = createSelector(
  shippingFeatureSelector,
  (state) => state[SHIPPING_FEATURE]
);

export const shippingPaginator = createSelector(
  shippingFeatureSelector,
  (state) => state.pagination
);

export const shipment = createSelector(shippingFeatureSelector, (state) =>
  state[SHIPPING_FEATURE].find((shipment) => shipment.id === state.selectedId)
);
