import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { billingsReducer, BILLINGS_FEATURE } from './billings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BillingsEffects } from './billings.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(BILLINGS_FEATURE, billingsReducer),
    EffectsModule.forFeature([BillingsEffects]),
  ],
})
export class BillingsStoreModule {}
