import { createSelector, MemoizedSelector } from '@ngrx/store';
import { billingSelectors } from './billings-store';
import { productSelectors } from './catalog-store/product';
import { customersSelectors } from './customers-store';
import { ordersSelectors } from './orders-store';

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  productSelectors.selectIsSLoading,
  customersSelectors.selectIsLoading,
  ordersSelectors.selectIsLoading,
  billingSelectors.selectIsLoading,
  (
    productIsLoading: boolean,
    customersIsLoading: boolean,
    ordersIsLoading: boolean,
    billingIsLoading: boolean
  ) =>
    productIsLoading ||
    customersIsLoading ||
    ordersIsLoading ||
    billingIsLoading
);

export const selectError: MemoizedSelector<object, string> = createSelector(
  productSelectors.selectError,
  customersSelectors.selectError,
  ordersSelectors.selectError,
  billingSelectors.selectError,
  (
    productError: string,
    customersError: string,
    ordersError: string,
    billingError: string
  ) => productError || customersError || ordersError || billingError
);
