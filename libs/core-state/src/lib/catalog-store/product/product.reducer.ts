import { Paginator } from '@bb-smartish/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { BaseState } from '../../base-state';
import { Product } from './product';
import {
  getProducts,
  getProductsFailed,
  getProductsSuccess,
  setSelectedProductId,
  updateProduct,
  updateProductFailed,
  updateProductSuccess,
} from './product.actions';

export const PRODUCT_FEATURE_SLICE = 'product';

export interface ProductState extends BaseState {
  [PRODUCT_FEATURE_SLICE]: Product[];
  selectedId?: string;
  pagination: Paginator;
}

export const productInitialState: ProductState = {
  [PRODUCT_FEATURE_SLICE]: [],
  pagination: {
    pageIndex: 0,
    length: 2,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
  isLoading: false,
};

const reducer = createReducer(
  productInitialState,
  on(setSelectedProductId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(getProducts, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    isLoading: false,
    error: '',
  })),
  on(getProductsFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(updateProduct, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(updateProductSuccess, (state, { product }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(updateProductFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function productReducer(
  state = productInitialState,
  action: Action
): ProductState {
  return reducer(state, action);
}
