import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { customersReducer, CUSTOMERS_FEATURE_SLICE } from './customers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './customers.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CUSTOMERS_FEATURE_SLICE, customersReducer),
    EffectsModule.forFeature([CustomersEffects]),
  ],
})
export class CustomersStoreModule {}
