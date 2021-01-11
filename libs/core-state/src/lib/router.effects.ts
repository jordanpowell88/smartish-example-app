import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { updateProductSuccess } from './catalog-store/product/product.actions';
import { updateCustomerSuccess } from './customers-store/customer.actions';
import { updateOrderSuccess } from './orders-store/orders.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}

  routeToCatalogOnProductSaveSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProductSuccess),
        map(() => this.router.navigate(['/catalog']))
      ),
    { dispatch: false }
  );

  routeToCustomersOnCustomerSaveSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateCustomerSuccess),
        map(() => this.router.navigate(['/customers']))
      ),
    { dispatch: false }
  );

  routeToOrdersOnOrderSaveSuccesss$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateOrderSuccess),
        map(() => this.router.navigate(['/orders']))
      ),
    { dispatch: false }
  );
}
