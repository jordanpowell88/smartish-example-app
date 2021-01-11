import { Paginator } from '@bb-smartish/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { BaseState } from '../base-state';
import { Customer } from './customer';
import { setSelectedCustomerId } from './customer.actions';

export const CUSTOMERS_FEATURE = 'customers';

export interface CustomersState extends BaseState {
  [CUSTOMERS_FEATURE]: Customer[];
  selectedId?: number;
  pagination: Paginator;
}

const initialState: CustomersState = {
  [CUSTOMERS_FEATURE]: [
    {
      id: 1,
      firstName: 'Jon',
      lastName: 'Rista',
      phone: '(720) 233-8565',
      address: {
        addressLine1: '123 None Your Business',
        city: 'Aurora',
        state: 'Colorado',
        zip: 80010,
      },
      email: 'jon.rista@briebug.com',
      totalOrders: 2,
      totalSpent: 105.5,
    },
    {
      id: 2,
      firstName: 'Jordan',
      lastName: 'Powell',
      phone: '937-726-9220',
      address: {
        addressLine1: '903 Carnation Dr',
        city: 'Wapakoneta',
        state: 'Ohio',
        zip: 45895,
      },
      email: 'jordan.powell@briebug.com',
      totalOrders: 1,
      totalSpent: 50,
    },
  ],
  pagination: {
    pageIndex: 0,
    length: 1,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
  isLoading: false,
};

const reducer = createReducer(
  initialState,
  on(setSelectedCustomerId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  }))
);

export function customersReducer(
  state = initialState,
  action: Action
): CustomersState {
  return reducer(state, action);
}
