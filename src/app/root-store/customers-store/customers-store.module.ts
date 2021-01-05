import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { customersReducer, CUSTOMERS_FEATURE } from './customers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './customers.effects';
import { CustomersService } from './customers.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CUSTOMERS_FEATURE, customersReducer),
    EffectsModule.forFeature([CustomersEffects]),
  ],
  providers: [CustomersService],
})
export class CustomersStoreModule {}
