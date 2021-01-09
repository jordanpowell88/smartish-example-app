import { Paginator } from '@bb-smartish/api-interfaces';
import { Action, createReducer } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Order } from './order';

export const ORDERS_FEATURE = 'orders';

export interface OrdersState extends BaseState {
  [ORDERS_FEATURE]: Order[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: OrdersState = {
  [ORDERS_FEATURE]: [
    {
      id: 1,
      date: new Date(),
      customer: {
        firstName: 'Jon',
        lastName: 'Rista',
        phone: null,
        address: null,
        email: null,
        totalOrders: 2,
        totalSpent: 105.5,
      },
      total: 45.99,
      payment: 'Paid',
      fulfillment: 'Unfulfilled',
      items: 2,
    },
  ],
  isLoading: false,
  pagination: {
    pageIndex: 0,
    length: 2,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};

const reducer = createReducer(initialState);

export function ordersReducer(
  state = initialState,
  action: Action
): OrdersState {
  return reducer(state, action);
}
