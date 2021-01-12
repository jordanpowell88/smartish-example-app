import { BaseState } from '../base-state';
import { ShippingInvoice } from './shipping-invoice';
import { Action, createReducer, on } from '@ngrx/store';
import { Paginator } from '@bb-smartish/api-interfaces';
import {
  setSelectedShippingInvoiceId,
  updateShippingInvoice,
  updateShippingInvoiceFailed,
  updateShippingInvoiceSuccess,
} from './shipping.actions';

export const SHIPPING_FEATURE = 'shipping';

export interface ShippingState extends BaseState {
  [SHIPPING_FEATURE]: ShippingInvoice[];
  selectedId?: number;
  pagination: Paginator;
}

const initialState: ShippingState = {
  [SHIPPING_FEATURE]: [
    {
      id: 1,
      amount: 100,
      date: new Date(),
      status: 'Not Shipped',
      to: {
        firstName: 'Jon',
        lastName: 'Rista',
        email: 'jon.rista@briebug.com',
        phone: '123-456-7890',
        address: {
          addressLine1: '123 Nun Ur Biznes',
          city: 'Denver',
          state: 'Colorado',
          zip: 12345,
        },
      },
    },
  ],
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
