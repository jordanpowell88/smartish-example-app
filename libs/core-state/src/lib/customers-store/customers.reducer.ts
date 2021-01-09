import { Paginator } from '@bb-smartish/api-interfaces';
import { Action, createReducer } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Customer } from './customer';

export const CUSTOMERS_FEATURE = 'customers';

export interface CustomersState extends BaseState {
  [CUSTOMERS_FEATURE]: Customer[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: CustomersState = {
  [CUSTOMERS_FEATURE]: [
    {
      firstName: 'Jon',
      lastName: 'Rista',
      phone: null,
      address: null,
      email: null,
      totalOrders: 2,
      totalSpent: 105.5,
    },
  ],
  pagination: {
    pageIndex: 0,
    length: 1,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
  isLoading: false,
};

const reducer = createReducer(initialState);

export function customersReducer(
  state = initialState,
  action: Action
): CustomersState {
  return reducer(state, action);
}
