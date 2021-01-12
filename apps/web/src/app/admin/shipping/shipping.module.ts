import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';
import { MaterialModule } from '@bb-smartish/material';
import { ShipmentComponent } from './shipment/shipment.component';

@NgModule({
  declarations: [ShippingComponent, ShipmentComponent],
  imports: [CommonModule, ShippingRoutingModule, MaterialModule],
})
export class ShippingModule {}
