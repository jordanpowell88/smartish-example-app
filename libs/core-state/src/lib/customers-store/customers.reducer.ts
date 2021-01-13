import { Paginator } from '@bb-smartish/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Customer } from './customer';
import {
  getCustomers,
  getCustomersFailed,
  getCustomersSuccess,
  setSelectedCustomerId,
  updateCustomer,
  updateCustomerFailed,
  updateCustomerSuccess,
} from './customer.actions';

export const CUSTOMERS_FEATURE = 'customers';

export interface CustomersState extends BaseState {
  [CUSTOMERS_FEATURE]: Customer[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: CustomersState = {
  [CUSTOMERS_FEATURE]: [],
  pagination: {
    pageIndex: 0,
    length: 1,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
  isLoading: false,
};

const reducer = createReducer(
  initialState,
  on(setSelectedCustomerId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(getCustomers, (state) => ({ ...state, isLoading: true })),
  on(getCustomersSuccess, (state, { customers }) => ({
    ...state,
    customers,
    isLoading: false,
    error: '',
  })),
  on(getCustomersFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(updateCustomer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(updateCustomerSuccess, (state, { customer }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(updateCustomerFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function customersReducer(
  state = initialState,
  action: Action
): CustomersState {
  return reducer(state, action);
}
