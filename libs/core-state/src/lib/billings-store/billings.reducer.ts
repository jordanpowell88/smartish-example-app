import { BillingInvoice } from './billing-invoice';
import { Action, createReducer, on } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Paginator } from '@bb-smartish/api-interfaces';
import {
  setSelectedBillingInvoiceId,
  updateBillingInvoice,
  updateBillingInvoiceFailed,
  updateBillingInvoiceSuccess,
} from './billings.actions';

export const BILLINGS_FEATURE = 'billings';

export interface BillingsState extends BaseState {
  [BILLINGS_FEATURE]: BillingInvoice[];
  selectedId?: number;
  pagination: Paginator;
}

const initialState: BillingsState = {
  [BILLINGS_FEATURE]: [
    {
      id: 1,
      to: {
        firstName: 'Jordan',
        lastName: 'Powell',
        phone: '937-726-9220',
        address: {
          addressLine1: '903 Carnation Dr',
          city: 'Wapakoneta',
          state: 'Ohio',
          zip: 45895,
        },
        email: 'jordan.powell@briebug.com',
      },
      date: new Date(),
      amount: 100,
    },
  ],
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
  on(updateBillingInvoice, (state, { invoice }) => ({
    ...state,
    isLoading: true,
  })),
  on(updateBillingInvoiceSuccess, (state, { invoice }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(updateBillingInvoiceFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function billingsReducer(
  state = initialState,
  action: Action
): BillingsState {
  return reducer(state, action);
}
