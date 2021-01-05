import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class ShippingEffects {
  constructor(private readonly actions$: Actions) {}
}
