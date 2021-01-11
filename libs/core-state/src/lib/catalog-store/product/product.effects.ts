import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigatedAction, ROUTER_NAVIGATED } from '@ngrx/router-store';
import { ProductService } from './product.service';
import { filter, map, tap } from 'rxjs/operators';
import { setSelectedProductId } from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {}

  setSelectedProductFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      filter((r: RouterNavigatedAction) =>
        r.payload.routerState.url.includes('/catalog')
      ),
      filter(
        (r: RouterNavigatedAction) =>
          !!r.payload.routerState.root.firstChild.firstChild.params.productId
      ),
      map(
        ({
          payload: {
            routerState: {
              root: {
                firstChild: {
                  firstChild: {
                    params: { productId },
                  },
                },
              },
            },
          },
        }) => productId
      ),
      map((productId) =>
        setSelectedProductId({
          selectedId: productId,
        })
      )
    )
  );
}
