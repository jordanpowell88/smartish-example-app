import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { updateBillingInvoiceSuccess } from './billings-store/billings.actions';
import {
  deleteProductSuccess,
  saveProductSuccess,
  updateProductSuccess,
} from './catalog-store/product/product.actions';
import { updateCustomerSuccess } from './customers-store/customer.actions';
import {
  addOrderSuccess,
  deleteOrderSuccess,
  updateOrderSuccess,
} from './orders-store/orders.actions';
import { updateShippingInvoiceSuccess } from './shipping-store/shipping.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}

  routeToCatalogOnProductSaveSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProductSuccess, saveProductSuccess, deleteProductSuccess),
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
        ofType(updateOrderSuccess, addOrderSuccess, deleteOrderSuccess),
        map(() => this.router.navigate(['/orders']))
      ),
    { dispatch: false }
  );

  routeToBillingsOnBillingSaveSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateBillingInvoiceSuccess),
        map(() => this.router.navigate(['/billing']))
      ),
    { dispatch: false }
  );

  routeToShippingOnShippingSaveSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateShippingInvoiceSuccess),
        map(() => this.router.navigate(['/shipping']))
      ),
    { dispatch: false }
  );
}
