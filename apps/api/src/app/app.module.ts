import { Module } from '@nestjs/common';

import { BillingsModule } from './billings';
import { CatalogModule } from './catalog';
import { CustomersModule } from './customers';
import { OrdersModule } from './orders';
import { ShippingModule } from './shipping';

@Module({
  imports: [
    BillingsModule,
    CatalogModule,
    CustomersModule,
    OrdersModule,
    ShippingModule,
  ],
})
export class AppModule {}
