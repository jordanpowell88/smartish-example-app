import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Product[]> {
    return of([]);
  }

  load(id: string): Observable<Product> {
    return of({} as Product);
  }

  create(product: Product): Observable<Product> {
    return of(product);
  }

  update(product: Product): Observable<Product> {
    return of(product);
  }

  delete(id: string): Observable<Product> {
    return of({} as Product);
  }
}
