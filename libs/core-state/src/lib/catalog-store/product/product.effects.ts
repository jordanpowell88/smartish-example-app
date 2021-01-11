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
  setSelectedProductId,
  updateProduct,
  updateProductFailed,
  updateProductSuccess,
} from './product.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  setSelectedProductFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map((r: RouterNavigatedAction) => r.payload.routerState),
      filter((routerState: SerializedRouterStateSnapshot) =>
        routerState.url.includes('/catalog')
      ),
      map(
        ({
          root: {
            firstChild: {
              firstChild: {
                params: { productId },
              },
            },
          },
        }) => productId
      ),
      filter((productId) => !!productId),
      map((productId) =>
        setSelectedProductId({
          selectedId: productId,
        })
      )
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

  routeToCatalogOnProductSaveSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProductSuccess),
        map(() => this.router.navigate(['/catalog']))
      ),
    { dispatch: false }
  );
}
