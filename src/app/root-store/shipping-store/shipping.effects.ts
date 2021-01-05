import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ShippingService } from './shipping.service';

@Injectable()
export class ShippingEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly shippingService: ShippingService
  ) {}
}
