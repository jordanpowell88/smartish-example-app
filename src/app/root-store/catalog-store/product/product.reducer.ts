import { Action, createReducer } from '@ngrx/store';
import { Product } from 'src/app/interfaces';
import { BaseState } from '../../base-state';

export const PRODUCT_FEATURE = 'product';

export interface ProductState extends BaseState {
  [PRODUCT_FEATURE]: Product[];
  selectedId?: string;
}

export const productInitialState: ProductState = {
  [PRODUCT_FEATURE]: [],
  isLoading: false,
};

const reducer = createReducer(productInitialState);

export function productReducer(
  state = productInitialState,
  action: Action
): ProductState {
  return reducer(state, action);
}
