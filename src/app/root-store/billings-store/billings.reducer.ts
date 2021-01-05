import { BillingInvoice } from './billing-invoice';
import { Action, createReducer } from '@ngrx/store';
import { BaseState } from '../base-state';

export const BILLINGS_FEATURE = 'billings';

export interface BillingsState extends BaseState {
  billingInvoice: BillingInvoice;
  selectedId?: string;
}

const initialState: BillingsState = {
  billingInvoice: null,
  isLoading: false,
};

const reducer = createReducer(initialState);

export function billingsReducer(
  state = initialState,
  action: Action
): BillingsState {
  return reducer(state, action);
}
