import { createSelector } from '@ngrx/store';
import { catalogFeatureSelector } from '../catalog.selectors';
import { PRODUCT_FEATURE_SLICE } from './product.reducer';

const productFeatureSelector = createSelector(
  catalogFeatureSelector,
  (state) => state.product
);

export const productIsLoading = createSelector(
  productFeatureSelector,
  (state) => state.isLoading
);

export const productError = createSelector(
  productFeatureSelector,
  (state) => state.error
);

export const allProducts = createSelector(
  productFeatureSelector,
  (state) => state[PRODUCT_FEATURE_SLICE]
);

export const productPaginator = createSelector(
  productFeatureSelector,
  (state) => state.pagination
);

export const product = createSelector(productFeatureSelector, (state) =>
  state[PRODUCT_FEATURE_SLICE].find(
    (product) => product.id === state.selectedId
  )
);

export const sizes = createSelector(product, (product) => product.sizes);
