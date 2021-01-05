import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { shippingReducer, SHIPPING_FEATURE_STATE } from './shipping.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShippingEffects } from './shipping.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SHIPPING_FEATURE_STATE, shippingReducer),
    EffectsModule.forFeature([ShippingEffects]),
  ],
})
export class ShippingStoreModule {}
