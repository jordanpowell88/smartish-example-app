import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { shippingReducer, SHIPPING_FEATURE } from './shipping.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShippingEffects } from './shipping.effects';
import { ShippingService } from './shipping.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SHIPPING_FEATURE, shippingReducer),
    EffectsModule.forFeature([ShippingEffects]),
  ],
  providers: [ShippingService],
})
export class ShippingStoreModule {}
