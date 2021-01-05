import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BillingInvoice } from './billing-invoice';

@Injectable()
export class BillingService {
  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<BillingInvoice[]> {
    return of([]);
  }

  load(id: string): Observable<BillingInvoice> {
    return of({});
  }

  create(billingInvoice: BillingInvoice): Observable<BillingInvoice> {
    return of(billingInvoice);
  }

  update(billingInvoice: BillingInvoice): Observable<BillingInvoice> {
    return of(billingInvoice);
  }

  delete(id: string): Observable<BillingInvoice> {
    return of({});
  }
}
