import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  selectBillingError,
  selectBillingIsLoading,
} from './billings-store/billings.selectors';
import {
  selectProductError,
  selectProductIsLoading,
} from './catalog-store/product/product.selectors';
import {
  selectCustomersError,
  selectCustomersIsLoading,
} from './customers-store/customers.selectors';
import {
  selectOrdersError,
  selectOrdersIsLoading,
} from './orders-store/orders.selectors';
import {
  selectShippingError,
  selectShippingIsLoading,
} from './shipping-store/shipping.selectors';

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectProductIsLoading,
  selectCustomersIsLoading,
  selectOrdersIsLoading,
  selectBillingIsLoading,
  selectShippingIsLoading,
  (
    productIsLoading: boolean,
    customersIsLoading: boolean,
    ordersIsLoading: boolean,
    billingIsLoading: boolean,
    shippingIsLoading: boolean
  ) =>
    productIsLoading ||
    customersIsLoading ||
    ordersIsLoading ||
    billingIsLoading ||
    shippingIsLoading
);

export const selectError: MemoizedSelector<object, string> = createSelector(
  selectProductError,
  selectCustomersError,
  selectOrdersError,
  selectBillingError,
  selectShippingError,
  (
    productError: string,
    customersError: string,
    ordersError: string,
    billingError: string,
    shippingError: string
  ) =>
    productError ||
    customersError ||
    ordersError ||
    billingError ||
    shippingError
);
