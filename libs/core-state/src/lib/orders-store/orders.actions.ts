import { createAction, props } from '@ngrx/store';
import { Order } from './order';

export const setSelectedOrderId = createAction(
  '[ROUTED TO ORDER] Sets Order Id',
  props<{ selectedId: number }>()
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
