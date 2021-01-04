import { IEntityState } from '@briebug/ngrx-auto-entity';
import { BillingInvoice } from './billing-invoice';

export const BILLINGS_FEATURE_SLICE = 'billings';

export interface BillingsState {
  billingInvoice: IEntityState<BillingInvoice>;
}

export const initialState: BillingsState = {
  billingInvoice: null,
};
