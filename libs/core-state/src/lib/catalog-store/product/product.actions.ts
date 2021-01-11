import { createAction, props } from '@ngrx/store';
import { Product } from './product';

export const setSelectedProductId = createAction(
  '[ROUTED TO PRODUCT] Sets Product Id',
  props<{ selectedId: string }>()
);

export const updateProduct = createAction(
  '[PRODUCT PAGE] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[PRODUCT API] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailed = createAction(
  '[PRODUCT API] Update Product Failed',
  props<{ error: string }>()
);

export const saveProductSuccess = createAction(
  '[PRODUCT API] Save Product Success',
  props<{ product: Product }>()
);

export const saveProductFailed = createAction(
  '[PRODUCT API] Save Product Failed',
  props<{ error: string }>()
);
