import { InjectRepository } from '@nestjs/typeorm';
import { BillingInvoice } from './billing-invoice';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@angular/core';

@Injectable()
export class BillingsService extends TypeOrmCrudService<BillingInvoice> {
  constructor(@InjectRepository(BillingInvoice) readonly repo) {
    super(repo);
  }
}
