import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ShippingInvoice } from './shipping-invoice';

@Injectable()
export class ShippingService extends TypeOrmCrudService<ShippingInvoice> {
  constructor(@InjectRepository(ShippingInvoice) readonly repo) {
    super(repo);
  }
}
