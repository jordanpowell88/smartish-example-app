import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { Order } from './order';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) readonly repo: Repository<Order>) {}

  loadAll(): Observable<Order[]> {
    return from(this.repo.find());
  }

  load(id: number): Observable<Order> {
    return from(this.repo.findOne(id));
  }

  create(order: Order): Observable<Order> {
    return from(this.repo.save(order));
  }

  update(order: Order): Observable<Order> {
    return from(this.create(order));
  }

  delete(id: number): Observable<Order> {
    return from(this.load(id).pipe(tap((order) => this.repo.remove(order))));
  }
}
