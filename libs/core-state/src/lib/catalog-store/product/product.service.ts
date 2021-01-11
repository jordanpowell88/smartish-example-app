import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { environment } from 'apps/api/src/environments/environment';

@Injectable()
export class ProductService {
  private apiUrl = `${environment.baseUrl}/products`;

  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  load(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.sku}`, product);
  }

  delete(productId: string): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${productId}`);
  }
}
