import { createAction, props } from '@ngrx/store';
import { Order } from './order';

export const setSelectedOrderId = createAction(
  '[ROUTED TO ORDER] Sets Order Id',
  props<{ selectedId: string }>()
);

export const getOrders = createAction('[ORDERS PAGE] Get All Orders');

export const getOrdersSuccess = createAction(
  '[ORDERS API] Get All Orders Success',
  props<{ orders: Order[] }>()
);

export const getOrdersFailed = createAction(
  '[ORDERS API] Get All Orders Failed',
  props<{ error: string }>()
);

export const updateOrder = createAction(
  '[ORDER PAGE] Update Order',
  props<{ order: Order }>()
);

export const updateOrderSuccess = createAction(
  '[ORDER API] Update Order Success',
  props<{ order: Order }>()
);

export const updateOrderFailed = createAction(
  '[ORDER API] Update Order Failed',
  props<{ error: string }>()
);
