import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  getBillingInvoicesFailed,
  updateBillingInvoiceFailed,
} from './billings-store/billings.actions';
import {
  getProductsFailed,
  saveProductFailed,
  updateProductFailed,
} from './catalog-store/product/product.actions';
import {
  getCustomersFailed,
  updateCustomerFailed,
} from './customers-store/customer.actions';
import {
  addOrderFailed,
  getOrdersFailed,
  updateOrderFailed,
} from './orders-store/orders.actions';
import {
  getShippingInvoicesFailed,
  updateShippingInvoiceFailed,
} from './shipping-store/shipping.actions';

@Injectable()
export class SnackBarEffects {
  constructor(
    private readonly actions$: Actions,
    private snackBar: MatSnackBar
  ) {}

  displayErrorSnackBarOnApiError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          updateProductFailed,
          saveProductFailed,
          updateCustomerFailed,
          updateOrderFailed,
          updateBillingInvoiceFailed,
          updateShippingInvoiceFailed,
          getBillingInvoicesFailed,
          getProductsFailed,
          getCustomersFailed,
          getOrdersFailed,
          getShippingInvoicesFailed,
          addOrderFailed
        ),
        map((action) => action.error),
        map((error) =>
          this.snackBar.open(error, 'X', {
            duration: 4000,
            horizontalPosition: 'end',
          })
        )
      ),
    { dispatch: false }
  );
}
