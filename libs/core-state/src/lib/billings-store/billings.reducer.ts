import { BillingInvoice } from './billing-invoice';
import { Action, createReducer, on } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Paginator } from '@bb-smartish/api-interfaces';
import {
  getBillingInvoices,
  getBillingInvoicesFailed,
  getBillingInvoicesSuccess,
  setSelectedBillingInvoiceId,
  updateBillingInvoice,
  updateBillingInvoiceFailed,
  updateBillingInvoiceSuccess,
} from './billings.actions';

export const BILLINGS_FEATURE = 'billings';

export interface BillingsState extends BaseState {
  [BILLINGS_FEATURE]: BillingInvoice[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: BillingsState = {
  [BILLINGS_FEATURE]: [],
  isLoading: false,
  pagination: {
    pageIndex: 0,
    length: 0,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};

const reducer = createReducer(
  initialState,
  on(setSelectedBillingInvoiceId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(getBillingInvoices, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getBillingInvoicesSuccess, (state, { billings }) => ({
    ...state,
    billings,
    isLoading: false,
    error: '',
  })),
  on(updateBillingInvoice, (state, { invoice }) => ({
    ...state,
    isLoading: true,
  })),
  on(updateBillingInvoiceSuccess, (state, { invoice }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(
    updateBillingInvoiceFailed,
    getBillingInvoicesFailed,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })
  )
);

export function billingsReducer(
  state = initialState,
  action: Action
): BillingsState {
  return reducer(state, action);
}
