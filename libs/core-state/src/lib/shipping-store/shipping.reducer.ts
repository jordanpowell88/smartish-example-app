import { BaseState } from '../base-state';
import { ShippingInvoice } from './shipping-invoice';
import { Action, createReducer, on } from '@ngrx/store';
import { Paginator } from '@bb-smartish/api-interfaces';
import {
  getShippingInvoices,
  getShippingInvoicesFailed,
  getShippingInvoicesSuccess,
  setSelectedShippingInvoiceId,
  updateShippingInvoice,
  updateShippingInvoiceFailed,
  updateShippingInvoiceSuccess,
} from './shipping.actions';

export const SHIPPING_FEATURE = 'shipping';

export interface ShippingState extends BaseState {
  [SHIPPING_FEATURE]: ShippingInvoice[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: ShippingState = {
  [SHIPPING_FEATURE]: [],
  isLoading: false,
  pagination: {
    pageIndex: 0,
    length: 1,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};

const reducer = createReducer(
  initialState,
  on(setSelectedShippingInvoiceId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(getShippingInvoices, (state) => ({ ...state, isLoading: true })),
  on(getShippingInvoicesSuccess, (state, { shipping }) => ({
    ...state,
    shipping,
    isLoading: false,
    error: '',
  })),
  on(getShippingInvoicesFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(updateShippingInvoice, (state, { invoice }) => ({
    ...state,
    isLoading: true,
  })),
  on(updateShippingInvoiceSuccess, (state, { invoice }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(updateShippingInvoiceFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function shippingReducer(
  state = initialState,
  action: Action
): ShippingState {
  return reducer(state, action);
}
