import { createSelector, MemoizedSelector } from '@ngrx/store';
import { billingSelectors } from './billings-store';
import { productSelectors } from './catalog-store/product';
import { customersSelectors } from './customers-store';
import { ordersSelectors } from './orders-store';
import { shippingSelectors } from './shipping-store';

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  productSelectors.selectIsSLoading,
  customersSelectors.selectIsLoading,
  ordersSelectors.selectIsLoading,
  billingSelectors.selectIsLoading,
  shippingSelectors.selectIsLoading,
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
  productSelectors.selectError,
  customersSelectors.selectError,
  ordersSelectors.selectError,
  billingSelectors.selectError,
  shippingSelectors.selectError,
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
