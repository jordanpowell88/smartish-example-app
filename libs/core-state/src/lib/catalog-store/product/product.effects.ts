import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  RouterNavigatedAction,
  ROUTER_NAVIGATED,
  SerializedRouterStateSnapshot,
} from '@ngrx/router-store';
import { ProductService } from './product.service';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import {
  getProducts,
  getProductsFailed,
  getProductsSuccess,
  setSelectedProductId,
  updateProduct,
  updateProductFailed,
  updateProductSuccess,
} from './product.actions';
import { of } from 'rxjs';
import {
  extractVerifiedParameter,
  routeIncludesPath,
} from 'libs/operators/src';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {}

  getProductsWhenRoutedToCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeIncludesPath('/catalog'),
      map(() => getProducts())
    )
  );

  getAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      exhaustMap(() =>
        this.productService.loadAll().pipe(
          map((products) => getProductsSuccess({ products })),
          catchError((error) => of(getProductsFailed({ error })))
        )
      )
    )
  );

  setSelectedProductFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeIncludesPath('/catalog'),
      extractVerifiedParameter('productId'),
      map((selectedId) => setSelectedProductId({ selectedId }))
    )
  );

  productPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      map((action) => action.product),
      exhaustMap((product) =>
        this.productService.update(product).pipe(
          map((product) => updateProductSuccess({ product })),
          catchError((error) => of(updateProductFailed({ error })))
        )
      )
    )
  );
}
