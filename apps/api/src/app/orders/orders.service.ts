import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Order } from './order';

@Injectable()
export class OrdersService extends TypeOrmCrudService<Order> {
  constructor(@InjectRepository(Order) readonly repo) {
    super(repo);
  }
}
