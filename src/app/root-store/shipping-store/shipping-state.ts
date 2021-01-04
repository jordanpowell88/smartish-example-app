import { IEntityState } from '@briebug/ngrx-auto-entity';
import { ShippingInvoice } from './shipping-invoice';

export const SHIPPING_FEATURE_STATE = 'shipping';

export interface ShippingState {
  shippingInvoice: IEntityState<ShippingInvoice>;
}

export const initialState: ShippingState = {
  shippingInvoice: null,
};
