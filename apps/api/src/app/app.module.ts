import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { BillingsModule } from './billings';
import { CatalogModule } from './catalog';
import { CustomersModule } from './customers';
import { OrdersModule } from './orders';
import { ShippingModule } from './shipping';

const config: TypeOrmModuleOptions = {};

@Module({
  imports: [
    BillingsModule,
    CatalogModule,
    CustomersModule,
    OrdersModule,
    ShippingModule,
    TypeOrmModule.forRoot(config),
  ],
})
export class AppModule {}
