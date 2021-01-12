import { createAction, props } from '@ngrx/store';
import { ShippingInvoice } from './shipping-invoice';

export const setSelectedShippingInvoiceId = createAction(
  '[ROUTED TO SHIPPING INVOICE] Sets Shipping Invoice Id',
  props<{ selectedId: number }>()
);

export const updateShippingInvoice = createAction(
  '[SHIPMENT PAGE] Update Shiping Invoice',
  props<{ invoice: ShippingInvoice }>()
);

export const updateShippingInvoiceSuccess = createAction(
  '[SHIPPING API] Update Shipping Success',
  props<{ invoice: ShippingInvoice }>()
);

export const updateShippingInvoiceFailed = createAction(
  '[SHIPPING API] Update Shipping Failed',
  props<{ error: string }>()
);
