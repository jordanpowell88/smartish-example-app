import { Paginator } from '@bb-smartish/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { BaseState } from '../../base-state';
import { Product } from './product';
import { setSelectedProductId } from './product.actions';

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
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      name: 'Dream Bean Coffee',
      quantity: null,
      status: 'Active',
      inventory: '43 in stock',
      sku: 'DBCOFFEE001',
      photos: [],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      price: 15,
    },
    {
      category: {
        name: 'Hats',
      },
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      name: 'DO Snapback',
      quantity: null,
      status: 'Active',
      inventory: '20 in stock',
      sku: 'DOSNPBK001',
      photos: [
        {
          source:
            'https://cdn.shopify.com/s/files/1/0019/3052/6774/products/mockup-0c6d4871_1728x.jpg?v=1552400115',
          title: 'Black / Gray / Gray',
        },
      ],
      sizes: ['M', 'L', 'XL'],
      price: 23,
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

const reducer = createReducer(
  productInitialState,
  on(setSelectedProductId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  }))
);

export function productReducer(
  state = productInitialState,
  action: Action
): ProductState {
  return reducer(state, action);
}
