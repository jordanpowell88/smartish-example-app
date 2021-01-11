import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { MaterialModule } from '@bb-smartish/material';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [OrdersComponent, OrderComponent],
  imports: [CommonModule, OrdersRoutingModule, MaterialModule],
})
export class OrdersModule {}
