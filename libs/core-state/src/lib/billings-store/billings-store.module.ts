import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { billingsReducer, BILLINGS_FEATURE } from './billings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BillingsEffects } from './billings.effects';
import { BillingService } from './billing.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(BILLINGS_FEATURE, billingsReducer),
    EffectsModule.forFeature([BillingsEffects]),
  ],
  providers: [BillingService],
})
export class BillingsStoreModule {}
