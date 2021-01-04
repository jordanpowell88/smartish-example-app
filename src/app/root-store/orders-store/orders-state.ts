import { IEntityState } from '@briebug/ngrx-auto-entity';
import { Order } from './order';

export const ORDERS_FEATURE_SLICE = 'orders';

export interface OrdersState {
  orders: IEntityState<Order>;
}

export const initialState: OrdersState = {
  orders: null,
};
