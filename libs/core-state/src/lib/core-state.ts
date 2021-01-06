import { BillingsState, BILLINGS_FEATURE } from './billings-store';
import { CatalogState, CATALOG_FEATURE } from './catalog-store';
import { CustomersState, CUSTOMERS_FEATURE } from './customers-store';
import { OrdersState, ORDERS_FEATURE } from './orders-store';
import { ShippingState, SHIPPING_FEATURE } from './shipping-store';

export interface CoreState {
  [BILLINGS_FEATURE]: BillingsState;
  [CATALOG_FEATURE]: CatalogState;
  [CUSTOMERS_FEATURE]: CustomersState;
  [ORDERS_FEATURE]: OrdersState;
  [SHIPPING_FEATURE]: ShippingState;
}
