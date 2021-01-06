import { BaseState } from '../base-state';
import { ShippingInvoice } from './shipping-invoice';
import { Action, createReducer } from '@ngrx/store';

export const SHIPPING_FEATURE = 'shipping';

export interface ShippingState extends BaseState {
  shippingInvoice: ShippingInvoice[];
  selectedId?: string;
}

const initialState: ShippingState = {
  shippingInvoice: [],
  isLoading: false,
};

const reducer = createReducer(initialState);

export function shippingReducer(
  state = initialState,
  action: Action
): ShippingState {
  return reducer(state, action);
}
