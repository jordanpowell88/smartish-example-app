import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  RouterNavigatedAction,
  ROUTER_NAVIGATED,
  SerializedRouterStateSnapshot,
} from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import {
  setSelectedShippingInvoiceId,
  updateShippingInvoice,
  updateShippingInvoiceFailed,
  updateShippingInvoiceSuccess,
} from './shipping.actions';
import { ShippingService } from './shipping.service';

@Injectable()
export class ShippingEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly shippingService: ShippingService
  ) {}

  setSelectedShippingInvoiceFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map((r: RouterNavigatedAction) => r.payload.routerState),
      filter((routerState: SerializedRouterStateSnapshot) =>
        routerState.url.includes('/shipping')
      ),
      map(
        ({
          root: {
            firstChild: {
              firstChild: {
                params: { shippingId },
              },
            },
          },
        }) => shippingId
      ),
      filter((shippingId) => !!shippingId),
      map((shippingId) =>
        setSelectedShippingInvoiceId({ selectedId: Number(shippingId) })
      )
    )
  );

  shippingPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateShippingInvoice),
      map((action) => action.invoice),
      exhaustMap((invoice) =>
        this.shippingService.update(invoice).pipe(
          map((invoice) => updateShippingInvoiceSuccess({ invoice })),
          catchError((error) => of(updateShippingInvoiceFailed({ error })))
        )
      )
    )
  );
}
