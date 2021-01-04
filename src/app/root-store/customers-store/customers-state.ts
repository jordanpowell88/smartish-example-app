import { IEntityState } from '@briebug/ngrx-auto-entity';
import { Customer } from './customer';

export const CUSTOMERS_FEATURE_SLICE = 'customers';

export interface CustomersState {
  customers: IEntityState<Customer>;
}

export const initialState: CustomersState = {
  customers: null,
};
