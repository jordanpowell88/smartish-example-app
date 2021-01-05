import { Action, createReducer } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Customer } from './customer';

export const CUSTOMERS_FEATURE_SLICE = 'customers';

export interface CustomersState extends BaseState {
  [CUSTOMERS_FEATURE_SLICE]: Customer[];
  selectedId?: string;
}

const initialState: CustomersState = {
  [CUSTOMERS_FEATURE_SLICE]: [],
  isLoading: false,
};

const reducer = createReducer(initialState);

export function customersReducer(
  state = initialState,
  action: Action
): CustomersState {
  return reducer(state, action);
}
