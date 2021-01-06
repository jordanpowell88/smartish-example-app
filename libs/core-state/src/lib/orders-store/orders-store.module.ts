import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ordersReducer, ORDERS_FEATURE } from './orders.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './orders.effects';
import { OrdersService } from './orders.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ORDERS_FEATURE, ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
  providers: [OrdersService],
})
export class OrdersStoreModule {}
