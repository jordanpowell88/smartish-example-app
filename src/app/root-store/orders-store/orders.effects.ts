import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { OrdersService } from './orders.service';

@Injectable()
export class OrdersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly ordersService: OrdersService
  ) {}
}
