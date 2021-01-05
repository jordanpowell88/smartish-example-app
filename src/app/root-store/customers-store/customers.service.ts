import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';

@Injectable()
export class CustomersService {
  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Customer[]> {
    return of([]);
  }

  load(id: string): Observable<Customer> {
    return of({} as Customer);
  }

  create(customer: Customer): Observable<Customer> {
    return of(customer);
  }

  update(customer: Customer): Observable<Customer> {
    return of(customer);
  }

  delete(id: string): Observable<Customer> {
    return of({} as Customer);
  }
}
