import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order';

@Injectable()
export class OrdersService {
  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Order[]> {
    return of([]);
  }

  load(id: string): Observable<Order> {
    return of({} as Order);
  }

  create(order: Order): Observable<Order> {
    return of(order);
  }

  update(order: Order): Observable<Order> {
    return of(order);
  }

  delete(id: string): Observable<Order> {
    return of({} as Order);
  }
}
