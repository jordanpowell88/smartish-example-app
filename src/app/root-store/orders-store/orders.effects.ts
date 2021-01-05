import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class OrdersEffects {
  constructor(private readonly actions$: Actions) {}
}
