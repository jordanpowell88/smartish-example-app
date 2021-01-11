import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '@bb-smartish/material';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [CustomersComponent, CustomerComponent],
  imports: [CommonModule, CustomersRoutingModule, MaterialModule],
})
export class CustomersModule {}
