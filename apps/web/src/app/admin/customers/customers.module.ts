import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgRxSmartishModule } from '@briebug/ngrx-smartish';
import { SharedModule } from '../../shared/shared.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [CustomersComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    NgRxSmartishModule,
  ],
})
export class CustomersModule {}
