import { Action, createReducer } from '@ngrx/store';
import { BaseState } from '../../base-state';
import { Product } from './product';

export const PRODUCT_FEATURE_SLICE = 'product';

export interface ProductState extends BaseState {
  [PRODUCT_FEATURE_SLICE]: Product[];
  selectedId?: string;
}

export const productInitialState: ProductState = {
  [PRODUCT_FEATURE_SLICE]: [],
  isLoading: false,
};

const reducer = createReducer(productInitialState);

export function productReducer(
  state = productInitialState,
  action: Action
): ProductState {
  return reducer(state, action);
}
