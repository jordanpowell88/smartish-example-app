import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@bb-smartish/material';
import { NgRxSmartishModule } from '@briebug/ngrx-smartish';
import { SharedModule } from '../../shared/shared.module';
import { BillComponent } from './bill/bill.component';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';

@NgModule({
  declarations: [BillingComponent, BillComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule,
    MaterialModule,
    NgRxSmartishModule,
  ],
})
export class BillingModule {}
