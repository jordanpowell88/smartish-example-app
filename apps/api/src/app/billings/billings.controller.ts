import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BillingInvoice } from './billing-invoice';
import { BillingsService } from './billings.service';

@Controller('billings')
export class BillingsController {
  constructor(private readonly service: BillingsService) {}

  @Get()
  loadAll(): Observable<BillingInvoice[]> {
    return this.service.loadAll();
  }

  @Post()
  create(@Body() billingInvoice: BillingInvoice): Observable<BillingInvoice> {
    return this.service.create(billingInvoice);
  }

  @Put(':id')
  update(@Body() billingInvoice: BillingInvoice): Observable<BillingInvoice> {
    return this.service.update(billingInvoice);
  }
}
