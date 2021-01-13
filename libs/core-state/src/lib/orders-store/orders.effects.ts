import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  RouterNavigatedAction,
  ROUTER_NAVIGATED,
  SerializedRouterStateSnapshot,
} from '@ngrx/router-store';
import {
  extractVerifiedParameter,
  routeIncludesPath,
} from 'libs/operators/src';
import { of } from 'rxjs';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import {
  getOrders,
  getOrdersFailed,
  getOrdersSuccess,
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

  getOrdersWhenRoutedToOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeIncludesPath('/orders'),
      map(() => getOrders())
    )
  );

  getAllOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOrders),
      exhaustMap(() =>
        this.ordersService.loadAll().pipe(
          map((orders) => getOrdersSuccess({ orders })),
          catchError((error) => of(getOrdersFailed({ error })))
        )
      )
    )
  );

  setSelectedOrderFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeIncludesPath('/orders'),
      extractVerifiedParameter('orderId'),
      map((selectedId) => setSelectedOrderId({ selectedId }))
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
