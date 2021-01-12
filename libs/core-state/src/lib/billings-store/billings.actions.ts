import { createAction, props } from '@ngrx/store';
import { BillingInvoice } from './billing-invoice';

export const setSelectedBillingInvoiceId = createAction(
  '[ROUTED TO BILLING INVOICE] Sets Billing Invoice ID',
  props<{ selectedId: number }>()
);

export const updateBillingInvoice = createAction(
  '[BILLING PAGE] Update Billing Invoice',
  props<{ billingInvoice: BillingInvoice }>()
);

export const updateBillingInvoiceSuccess = createAction(
  '[BILLING API] Update Billing Success',
  props<{ billing: BillingInvoice }>()
);

export const updateBillingInvoiceFailed = createAction(
  '[BILLING API] Update Billing Failed',
  props<{ error: string }>()
);
