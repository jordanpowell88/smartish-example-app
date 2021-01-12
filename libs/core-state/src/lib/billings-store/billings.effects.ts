import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  RouterNavigatedAction,
  ROUTER_NAVIGATED,
  SerializedRouterStateSnapshot,
} from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import { BillingService } from './billing.service';
import {
  setSelectedBillingInvoiceId,
  updateBillingInvoice,
  updateBillingInvoiceFailed,
  updateBillingInvoiceSuccess,
} from './billings.actions';

@Injectable()
export class BillingsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly billingService: BillingService
  ) {}

  setSelectedBillingInvoiceFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map((r: RouterNavigatedAction) => r.payload.routerState),
      filter((routerState: SerializedRouterStateSnapshot) =>
        routerState.url.includes('/billing')
      ),
      map(
        ({
          root: {
            firstChild: {
              firstChild: {
                params: { billingId },
              },
            },
          },
        }) => billingId
      ),
      filter((billingId) => !!billingId),
      map((billingId) =>
        setSelectedBillingInvoiceId({ selectedId: Number(billingId) })
      )
    )
  );

  billingPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBillingInvoice),
      map((action) => action.billingInvoice),
      exhaustMap((billingInvoice) =>
        this.billingService.update(billingInvoice).pipe(
          map((billing) => updateBillingInvoiceSuccess({ billing })),
          catchError((error) => of(updateBillingInvoiceFailed({ error })))
        )
      )
    )
  );
}
