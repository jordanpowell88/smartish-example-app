import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';

@NgModule({
  declarations: [ShippingComponent, ShipmentComponent],
  imports: [CommonModule, ShippingRoutingModule, SharedModule],
})
export class ShippingModule {}
