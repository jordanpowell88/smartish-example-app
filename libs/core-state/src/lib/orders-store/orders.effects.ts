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
  setSelectedOrderId,
  updateOrder,
  updateOrderFailed,
  updateOrderSuccess,
} from './orders.actions';
import { OrdersService } from './orders.service';

@Injectable()
export class OrdersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly ordersService: OrdersService
  ) {}

  setSelectedOrderFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map((r: RouterNavigatedAction) => r.payload.routerState),
      filter((routerState: SerializedRouterStateSnapshot) =>
        routerState.url.includes('/orders')
      ),
      map(
        ({
          root: {
            firstChild: {
              firstChild: {
                params: { orderId },
              },
            },
          },
        }) => orderId
      ),
      filter((orderId) => !!orderId),
      map((orderId) => setSelectedOrderId({ selectedId: Number(orderId) }))
    )
  );

  orderPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateOrder),
      map((action) => action.order),
      exhaustMap((order) =>
        this.ordersService.update(order).pipe(
          map((order) => updateOrderSuccess({ order })),
          catchError((error) => of(updateOrderFailed({ error })))
        )
      )
    )
  );
}
