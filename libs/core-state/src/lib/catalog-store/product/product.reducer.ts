import { Paginator } from '@bb-smartish/api-interfaces';
import { Action, createReducer } from '@ngrx/store';
import { BaseState } from '../../base-state';
import { Product } from './product';

export const PRODUCT_FEATURE_SLICE = 'product';

export interface ProductState extends BaseState {
  [PRODUCT_FEATURE_SLICE]: Product[];
  selectedId?: string;
  pagination: Paginator;
}

export const productInitialState: ProductState = {
  [PRODUCT_FEATURE_SLICE]: [
    {
      category: {
        name: 'Coffee',
      },
      description: '',
      name: 'Dream Bean Coffee',
      quantity: null,
      status: 'Active',
      inventory: '43 in stock',
      sku: 'DBCOFFEE001',
      photos: [],
      size: null,
    },
    {
      category: {
        name: 'Hats',
      },
      description: '',
      name: 'DO Snapback',
      quantity: null,
      status: 'Active',
      inventory: '20 in stock',
      sku: 'DOSNPBK001',
      photos: [],
      size: null,
    },
  ],
  pagination: {
    pageIndex: 0,
    length: 2,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
  isLoading: false,
};

const reducer = createReducer(productInitialState);

export function productReducer(
  state = productInitialState,
  action: Action
): ProductState {
  return reducer(state, action);
}
