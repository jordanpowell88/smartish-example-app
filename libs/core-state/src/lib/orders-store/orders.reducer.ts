import { Paginator } from '@bb-smartish/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Order } from './order';
import {
  getOrders,
  getOrdersFailed,
  getOrdersSuccess,
  setSelectedOrderId,
  updateOrder,
  updateOrderFailed,
  updateOrderPagination,
  updateOrderSuccess,
} from './orders.actions';

export const ORDERS_FEATURE = 'orders';

export interface OrdersState extends BaseState {
  [ORDERS_FEATURE]: Order[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: OrdersState = {
  [ORDERS_FEATURE]: [],
  isLoading: false,
  pagination: {
    pageIndex: 0,
    length: 2,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};

const reducer = createReducer(
  initialState,
  on(setSelectedOrderId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(updateOrderPagination, (state, { pagination }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      ...pagination,
    },
  })),
  on(getOrders, (state) => ({ ...state, isLoading: true })),
  on(getOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    isLoading: false,
    error: '',
    pagination: {
      ...state.pagination,
      length: orders.length,
    },
  })),
  on(getOrdersFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(updateOrder, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(updateOrderSuccess, (state, { order }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(updateOrderFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function ordersReducer(
  state = initialState,
  action: Action
): OrdersState {
  return reducer(state, action);
}
