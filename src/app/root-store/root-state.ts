import { billingInitialState } from './billings-store';
import {
  BillingsState,
  BILLINGS_FEATURE_SLICE,
} from './billings-store/billings-state';
import { catalogInitialState } from './catalog-store';
import {
  CatalogState,
  CATALOG_FEATURE_SLICE,
} from './catalog-store/catalog-state';
import { customersInitialState } from './customers-store';
import {
  CustomersState,
  CUSTOMERS_FEATURE_SLICE,
} from './customers-store/customers-state';
import { ordresInitialState } from './orders-store';
import { OrdersState, ORDERS_FEATURE_SLICE } from './orders-store/orders-state';
import { shippingInitialState } from './shipping-store';
import {
  ShippingState,
  SHIPPING_FEATURE_STATE,
} from './shipping-store/shipping-state';

export interface RootState {
  [BILLINGS_FEATURE_SLICE]: BillingsState;
  [CATALOG_FEATURE_SLICE]: CatalogState;
  [CUSTOMERS_FEATURE_SLICE]: CustomersState;
  [ORDERS_FEATURE_SLICE]: OrdersState;
  [SHIPPING_FEATURE_STATE]: ShippingState;
}

export const initialState: RootState = {
  [BILLINGS_FEATURE_SLICE]: billingInitialState,
  [CATALOG_FEATURE_SLICE]: catalogInitialState,
  [CUSTOMERS_FEATURE_SLICE]: customersInitialState,
  [ORDERS_FEATURE_SLICE]: ordresInitialState,
  [SHIPPING_FEATURE_STATE]: shippingInitialState,
};
