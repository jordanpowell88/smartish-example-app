import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { billingActions } from './billings-store';
import { productActions } from './catalog-store';
import { customerActions } from './customers-store';
import { orderActions } from './orders-store';
import { shippingActions } from './shipping-store';

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
          productActions.updateProductFailed,
          productActions.saveProductFailed,
          customerActions.updateCustomerFailed,
          orderActions.updateOrderFailed,
          billingActions.updateBillingInvoiceFailed,
          shippingActions.updateShippingInvoiceFailed
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
