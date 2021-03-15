import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  selectBillingError,
  selectBillingIsLoading,
} from './billings-store/billings.selectors';
import {
  productError,
  productIsLoading,
} from './catalog-store/product/product.selectors';
import {
  customersError,
  customersIsLoading,
} from './customers-store/customers.selectors';
import { ordersError, ordersIsLoading } from './orders-store/orders.selectors';
import {
  shippingError,
  shippingIsLoading,
} from './shipping-store/shipping.selectors';

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  productIsLoading,
  customersIsLoading,
  ordersIsLoading,
  selectBillingIsLoading,
  shippingIsLoading,
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
  productError,
  customersError,
  ordersError,
  selectBillingError,
  shippingError,
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
