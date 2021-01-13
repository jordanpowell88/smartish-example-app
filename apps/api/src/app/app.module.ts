import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BillingInvoice, BillingsModule } from './billings';
import { CatalogModule, Category, Product } from './catalog';
import { Customer, CustomersModule } from './customers';
import { Order, OrdersModule } from './orders';
import { ShippingInvoice, ShippingModule } from './shipping';

const config: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.CONNECTION_STRING,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: [
    BillingInvoice,
    Category,
    Product,
    Customer,
    Order,
    ShippingInvoice,
  ],
};

@Module({
  imports: [
    BillingsModule,
    CatalogModule,
    CustomersModule,
    OrdersModule,
    ShippingModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
  ],
})
export class AppModule {}
