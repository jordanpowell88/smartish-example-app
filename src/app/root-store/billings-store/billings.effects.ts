import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BillingService } from './billing.service';

@Injectable()
export class BillingsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly billingService: BillingService
  ) {}
}
