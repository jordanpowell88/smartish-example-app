import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingInvoice } from './billing-invoice';

import { BillingsController } from './billings.controller';
import { BillingsService } from './billings.service';

@Module({
  imports: [TypeOrmModule.forFeature([BillingInvoice])],
  controllers: [BillingsController],
  providers: [BillingsService],
  exports: [BillingsService],
})
export class BillingsModule {}
