import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CustomersService } from './customers.service';

@Injectable()
export class CustomersEffects {
  constructor(
    private readonly acdtions$: Actions,
    private readonly customersService: CustomersService
  ) {}
}
