import { ActionReducerMap } from '@ngrx/store';
import {
  categoryReducer,
  CategoryState,
  CATEGORY_FEATURE_SLICE,
} from './category/category.reducer';
import {
  productReducer,
  ProductState,
  PRODUCT_FEATURE,
} from './product/product.reducer';

export const CATALOG_FEATURE_SLICE = 'catalog';

export interface CatalogState {
  [PRODUCT_FEATURE]: ProductState;
  [CATEGORY_FEATURE_SLICE]: CategoryState;
}

export const reducer: ActionReducerMap<CatalogState> = {
  [PRODUCT_FEATURE]: productReducer,
  [CATEGORY_FEATURE_SLICE]: categoryReducer,
};
