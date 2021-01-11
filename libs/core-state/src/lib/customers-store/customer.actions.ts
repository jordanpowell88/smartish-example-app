import { createAction, props } from '@ngrx/store';
import { Customer } from './customer';

export const setSelectedCustomerId = createAction(
  '[ROUTED TO CUSTOMER] Sets Customer Id',
  props<{ selectedId: number }>()
);

export const updateCustomer = createAction(
  '[CUSTOMER PAGE] Update Customer',
  props<{ customer: Customer }>()
);

export const updateCustomerSuccess = createAction(
  '[CUSTOMER API] Update Customer Success',
  props<{ customer: Customer }>()
);

export const updateCustomerFailed = createAction(
  '[CUSTOMER API] Update Customer Failed',
  props<{ error: string }>()
);
