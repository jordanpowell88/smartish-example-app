import { createSelector, MemoizedSelector } from '@ngrx/store';
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
  (
    productIsLoading: boolean,
    customersIsLoading: boolean,
    ordersIsLoading: boolean
  ) => productIsLoading || customersIsLoading || ordersIsLoading
);

export const selectError: MemoizedSelector<object, string> = createSelector(
  productSelectors.selectError,
  customersSelectors.selectError,
  ordersSelectors.selectError,
  (productError: string, customersError: string, ordersError: string) =>
    productError || customersError || ordersError
);
