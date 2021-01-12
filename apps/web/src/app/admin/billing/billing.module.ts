import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { MaterialModule } from '@bb-smartish/material';
import { BillComponent } from './bill/bill.component';

@NgModule({
  declarations: [BillingComponent, BillComponent],
  imports: [CommonModule, BillingRoutingModule, MaterialModule],
})
export class BillingModule {}
