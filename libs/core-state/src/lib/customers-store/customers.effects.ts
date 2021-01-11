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
  setSelectedCustomerId,
  updateCustomer,
  updateCustomerFailed,
  updateCustomerSuccess,
} from './customer.actions';
import { CustomersService } from './customers.service';

@Injectable()
export class CustomersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly customersService: CustomersService
  ) {}

  setSelectedCustomerFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map((r: RouterNavigatedAction) => r.payload.routerState),
      filter((routerState: SerializedRouterStateSnapshot) =>
        routerState.url.includes('/customers')
      ),
      map(
        ({
          root: {
            firstChild: {
              firstChild: {
                params: { customerId },
              },
            },
          },
        }) => customerId
      ),
      filter((customerId) => !!customerId),
      map((customerId) =>
        setSelectedCustomerId({ selectedId: Number(customerId) })
      )
    )
  );

  customerPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCustomer),
      map((action) => action.customer),
      exhaustMap((customer) =>
        this.customersService.update(customer).pipe(
          map((customer) => updateCustomerSuccess({ customer })),
          catchError((error) => of(updateCustomerFailed({ error })))
        )
      )
    )
  );
}
