import { Action, createReducer } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Order } from './order';

export const ORDERS_FEATURE = 'orders';

export interface OrdersState extends BaseState {
  [ORDERS_FEATURE]: Order[];
  selectedId?: string;
}

const initialState: OrdersState = {
  [ORDERS_FEATURE]: [],
  isLoading: false,
};

const reducer = createReducer(initialState);

export function ordersReducer(
  state = initialState,
  action: Action
): OrdersState {
  return reducer(state, action);
}
