import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShippingInvoice } from './shipping-invoice';

@Injectable()
export class ShippingService {
  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<ShippingInvoice[]> {
    return of([]);
  }

  load(id: string): Observable<ShippingInvoice> {
    return of({} as ShippingInvoice);
  }

  create(shippingInvoice: ShippingInvoice): Observable<ShippingInvoice> {
    return of(shippingInvoice);
  }

  update(shippingInvoice: ShippingInvoice): Observable<ShippingInvoice> {
    return of(shippingInvoice);
  }

  delete(id: string): Observable<ShippingInvoice> {
    return of({} as ShippingInvoice);
  }
}
