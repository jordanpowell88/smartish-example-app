import { createSelector } from '@ngrx/store';
import { catalogFeatureSelector } from '../catalog.selectors';
import { PRODUCT_FEATURE_SLICE } from './product.reducer';

const productFeatureSelector = createSelector(
  catalogFeatureSelector,
  (state) => state.product
);

export const selectAllProducts = createSelector(
  productFeatureSelector,
  (state) => state[PRODUCT_FEATURE_SLICE]
);

export const selectPaginator = createSelector(
  productFeatureSelector,
  (state) => state.pagination
);
