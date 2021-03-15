import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OrderComponent } from './order/order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { SmartFormsModule } from '@bb-smartish/smart-forms';
import { NgRxSmartishModule } from '@briebug/ngrx-smartish';
import { MaterialModule } from '@bb-smartish/material';

@NgModule({
  declarations: [OrdersComponent, OrderComponent, AddOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    SmartFormsModule,
    MaterialModule,
    NgRxSmartishModule,
  ],
})
export class OrdersModule {}
