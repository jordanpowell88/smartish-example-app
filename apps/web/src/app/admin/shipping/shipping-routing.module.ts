import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShippingComponent } from './shipping.component';

const routes: Routes = [
  {
    path: '',
    component: ShippingComponent,
  },
  {
    path: ':shippingId',
    component: ShipmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingRoutingModule {}
