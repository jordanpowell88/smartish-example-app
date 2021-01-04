import {
  BillingsState,
  BILLINGS_FEATURE_SLICE,
} from './billings-store/billings-state';
import {
  CatalogState,
  CATALOG_FEATURE_SLICE,
} from './catalog-store/catalog-state';
import {
  CustomersState,
  CUSTOMERS_FEATURE_SLICE,
} from './customers-store/customers-state';
import { OrdersState, ORDERS_FEATURE_SLICE } from './orders-store/orders-state';
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

// export const initialState: RootState = {
//   [BILLINGS_FEATURE_SLICE]: {},
//   [CATALOG_FEATURE_SLICE]: {},
//   [CUSTOMERS_FEATURE_SLICE]: {},
//   [ORDERS_FEATURE_SLICE]: {},
//   [SHIPPING_FEATURE_STATE]: {},
// };
