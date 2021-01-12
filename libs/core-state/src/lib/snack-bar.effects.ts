import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { productActions } from './catalog-store';
import { map } from 'rxjs/operators';
import { customerActions } from './customers-store';
import { orderActions } from './orders-store';

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
          orderActions.updateOrderFailed
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